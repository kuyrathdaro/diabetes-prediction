<!-- components/InputForm.vue -->
<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow rounded-lg">
      <UFormField name="pregnancies" label="Pregnancies" required>
        <UInput v-model="state.pregnancies" type="number" class="text-base p-4" />
      </UFormField>
      <UFormField name="glucose" label="Glucose" required>
        <UInput v-model="state.glucose" type="number" class="text-base p-4" />
      </UFormField>
      <UFormField name="skin_thickness" label="Skin Thickness" required>
        <UInput v-model="state.skin_thickness" type="number" class="text-base p-4" />
      </UFormField>
      <UFormField name="insulin" label="Insulin" required>
        <UInput v-model="state.insulin" type="number" class="text-base p-4" />
      </UFormField>
      <UFormField name="bmi" label="BMI" required>
        <UInput v-model="state.bmi" type="number" class="text-base p-4" />
      </UFormField>
      <UFormField name="diabetes_pedigree" label="Diabetes Pedigree" required>
        <UInput v-model="state.diabetes_pedigree" type="number" class="text-base p-4" />
      </UFormField>
      <UFormField name="age" label="Age" required>
        <UInput v-model="state.age" type="number" class="text-base p-4" />
      </UFormField>
    </div>

    <div class="flex justify-center mt-6">
      <button
        type="submit"
        class="bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-green-600"
      >
        Predict
      </button>
    </div>

    <div v-if="errors.length" class="mt-4 text-red-500 text-center">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "#ui/types";

const state = reactive<Partial<Schema>>({});
const errors = ref<string[]>([]);

const schema = z.object({
  pregnancies: z.number().min(0).max(20),
  glucose: z.number().min(0).max(300),
  skin_thickness: z.number().min(0).max(100),
  insulin: z.number().min(0).max(900),
  bmi: z.number().min(0).max(100),
  diabetes_pedigree: z.number().min(0).max(2.5),
  age: z.number().min(0).max(120),
});

type Schema = z.output<typeof schema>;

function onSubmit(event: FormSubmitEvent<Schema>) {
  errors.value = [];
  const result = schema.safeParse(state);
  if (!result.success) {
    errors.value = result.error.errors.map((err) => err.message);
  } else {
    console.log("Form submitted successfully", result.data);
    // You could emit a result here if needed
  }
}
</script>
