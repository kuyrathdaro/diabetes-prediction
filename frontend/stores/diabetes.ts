import { defineStore } from 'pinia';
import { DiabetesService } from '@/services/diabetes';

const diabetesService = new DiabetesService()

export const useDiabetesStore = defineStore('diabetes', {
  state: () => ({
    prediction: null as null | string,
    inputData: null as null | Record<string, any>,
    loading: false,
    error: null as null | string,
  }),

  actions: {
    async predict(input: Record<string, any>) {
      this.loading = true
      this.error = null
      this.prediction = null
      this.inputData = input

      try {
        const result = await diabetesService.predict(input)
        this.prediction = result?.data?.prediction || 'No prediction received'
      } catch (err: any) {
        this.error = 'Failed to fetch prediction'
        console.error('Prediction API error:', err)
      } finally {
        this.loading = false
      }
    },
  },
})
