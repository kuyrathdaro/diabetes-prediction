<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white shadow rounded-lg">
      <UFormField name="pregnancies">
        <template #label>
          <div class="flex items-center gap-1">
            Pregnancies
            <UTooltip text="Number of times the patient has been pregnant.">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.pregnancies" type="number" class="text-base p-4" />
      </UFormField>

      <UFormField name="glucose">
        <template #label>
          <div class="flex items-center gap-1">
            Glucose
            <UTooltip text="Plasma glucose concentration from glucose tolerance test.">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.glucose" type="number" class="text-base p-4" />
      </UFormField>

      <UFormField name="skin_thickness">
        <template #label>
          <div class="flex items-center gap-1">
            Skin Thickness
            <UTooltip text="Triceps skin fold thickness (in mm).">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.skin_thickness" type="number" class="text-base p-4" />
      </UFormField>

      <UFormField name="insulin">
        <template #label>
          <div class="flex items-center gap-1">
            Insulin
            <UTooltip text="2-Hour serum insulin (μU/ml).">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.insulin" type="number" class="text-base p-4" />
      </UFormField>

      <UFormField name="bmi">
        <template #label>
          <div class="flex items-center gap-1">
            BMI
            <UTooltip text="Body Mass Index = weight (kg) / height (m²).">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.bmi" type="number" class="text-base p-4" />
      </UFormField>

      <UFormField name="diabetes_pedigree">
        <template #label>
          <div class="flex items-center gap-1">
            Diabetes Pedigree
            <UTooltip text="A score that quantifies the family history of diabetes.">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.diabetes_pedigree" type="number" class="text-base p-4" />
      </UFormField>

      <UFormField name="age">
        <template #label>
          <div class="flex items-center gap-1">
            Age
            <UTooltip text="Age of the patient in years.">
              <UIcon name="i-heroicons-question-mark-circle" class="w-4 h-4 text-gray-400 cursor-pointer" />
            </UTooltip>
          </div>
        </template>
        <UInput v-model="state.age" type="number" class="text-base p-4" />
      </UFormField>
      <div class="col-span-1 md:col-span-3 flex justify-center mt-2">
        <button type="submit" class="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-600">
          Predict
        </button>
      </div>
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
