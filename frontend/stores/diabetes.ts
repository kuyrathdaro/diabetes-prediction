import { defineStore } from "pinia";
import { DiabetesService } from "@/services/diabetes";
import { openDB } from "idb";

const diabetesService = new DiabetesService();
const DB_NAME = "diabetes-db";
const STORE_NAME = "history";

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
}

async function saveHistoryToDB(history: any[]) {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.objectStore(STORE_NAME).clear();
  for (const item of history) {
    await tx.objectStore(STORE_NAME).add(item);
  }
  await tx.done;
}

async function loadHistoryFromDB() {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
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
        // Convert 1 to true (diabetes), 0 to false (not diabetes)
        this.prediction = this.prediction = result?.data?.prediction === 1;
        // Store in history
        this.history.push({
          input: { ...input_data },
          prediction: this.prediction,
          date: new Date().toISOString(),
        });
        await saveHistoryToDB(this.history);
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
      await saveHistoryToDB([]);
    }
  },
});
