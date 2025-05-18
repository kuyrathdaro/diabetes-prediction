import type { Response } from "~/types/response";

export class DiabetesService {
  private baseUrl: string;

  constructor() {
    const config = useRuntimeConfig()
    this.baseUrl = config.public.apiBase as string;
  }

  async predict(input: Record<string, any>): Promise<Response> {
    return await $fetch(`${this.baseUrl}/diabetes/predict`, {
      method: 'POST',
      body: input,
    })
  }
}
