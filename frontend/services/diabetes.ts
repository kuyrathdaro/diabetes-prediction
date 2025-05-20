import type { Response } from "~/types/response";

export class DiabetesService {
  async predictDiabetes(input: any): Promise<Response> {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase as string;
    return await $fetch<Response>(`${baseUrl}/predict-diabetes`, {
      method: 'POST',
      body: input,
    })
  }
}
