import { defineStore } from "pinia";
import { DiabetesService } from "@/services/diabetes";
import { openDB } from "idb";

const diabetesService = new DiabetesService();
const DB_NAME = "diabetes-db";
const STORE_NAME = "history";

// Version helpers
function getCurrentDBVersion() {
  return Number(localStorage.getItem("diabetes-db-version") || 1);
}
function setCurrentDBVersion(version: number) {
  localStorage.setItem("diabetes-db-version", String(version));
}

async function getDB() {
  const version = getCurrentDBVersion();
  return openDB(DB_NAME, version, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

async function saveHistoryToDB(history: any[]) {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.objectStore(STORE_NAME).clear();
  for (const item of history) {
    const plainItem = JSON.parse(JSON.stringify(item));
    await tx.objectStore(STORE_NAME).add(plainItem);
  }
  await tx.done;
}

async function loadHistoryFromDB() {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
}

// This function now bumps the version and stores it in localStorage
async function resetHistoryStore() {
  const newVersion = Date.now(); // Always use a new, higher version
  setCurrentDBVersion(newVersion);
  const db = await openDB(DB_NAME, newVersion, {
    upgrade(db) {
      if (db.objectStoreNames.contains(STORE_NAME)) {
        db.deleteObjectStore(STORE_NAME);
      }
      db.createObjectStore(STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
  db.close();
}

export const useDiabetesStore = defineStore("diabetes", {
  state: () => ({
    prediction: null as null | boolean,
    inputData: null as null | any,
    loading: false,
    error: null as null | string,
    history: [] as Array<any>,
  }),

  actions: {
    async predict(input_data: Record<string, any>) {
      this.loading = true;
      this.error = null;
      this.prediction = null;
      this.inputData = input_data;

      try {
        const result = await diabetesService.predictDiabetes(input_data);
        this.prediction = result?.data?.prediction === 1;
        const plainInput = JSON.parse(JSON.stringify(input_data));
        const historyItem = {
          ...plainInput,
          prediction: this.prediction,
          date: new Date().toISOString(),
        };
        this.history.push(historyItem);
        await saveHistoryToDB(
          this.history.map((item) => JSON.parse(JSON.stringify(item)))
        );
      } catch (err: any) {
        this.error = "Failed to fetch prediction";
        console.error("Prediction API error:", err);
      } finally {
        this.loading = false;
      }
    },
    async loadHistory() {
      this.history = await loadHistoryFromDB();
    },
    async clearHistory() {
      this.history = [];
      await resetHistoryStore();
      window.location.reload();
    },
  },
});