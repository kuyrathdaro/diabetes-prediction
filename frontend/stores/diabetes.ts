import { defineStore } from "pinia";
import { DiabetesService } from "@/services/diabetes";

const diabetesService = new DiabetesService();

export const useDiabetesStore = defineStore("diabetes", {
  state: () => ({
    prediction: null as null | boolean,
    inputData: null as null | any,
    loading: false,
    error: null as null | string,
    history: [] as { input_data: any; prediction: any }[], // <-- Add this
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
          input_data: { ...input_data },
          prediction: this.prediction,
        });
      } catch (err: any) {
        this.error = "Failed to fetch prediction";
        console.error("Prediction API error:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
