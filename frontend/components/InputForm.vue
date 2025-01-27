<template>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
        <div class="grid grid-cols-2 gap-6 p-4">
            <UFormField name="pregnancies" label="Pregnancies" required>
                <UInput v-model="state.pregnancies" type="number" class="text-lg p-3" />
            </UFormField>
            <UFormField name="glucose" label="Glucose" required>
                <UInput v-model="state.glucose" type="number" class="text-lg p-3" />
            </UFormField>
            <UFormField name="skin_thickness" label="Skin Thickness" required>
                <UInput v-model="state.skin_thickness" type="number" class="text-lg p-3" />
            </UFormField>
            <UFormField name="insulin" label="Insulin" required>
                <UInput v-model="state.insulin" type="number" class="text-lg p-3"/>
            </UFormField>
            <UFormField name="bmi" label="BMI" required>
                <UInput v-model="state.bmi" type="number" class="text-lg p-3"/>
            </UFormField>
            <UFormField name="diabetes_pedigree" label="Diabetes Pedigree" required>
                <UInput v-model="state.diabetes_pedigree" type="number" class="text-lg p-3" />
            </UFormField>
            <UFormField name="age" label="Age" required>
                <UInput v-model="state.age" type="number" class="text-lg p-3" />
            </UFormField>
        </div>
        <div v-if="errors.length" class="mt-4 text-red-500">
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
    </UForm>
</template>
<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "#ui/types";

const state = reactive<Partial<Schema>>({})

const errors = ref<string[]>([])

type Schema = z.output<typeof schema>

const schema = z.object({
    pregnancies: z.number().min(0, { message: "Pregnancies must be a non-negative number" }).max(20, { message: "Pregnancies must be 20 or less" }),
    glucose: z.number().min(0, { message: "Glucose must be a non-negative number" }).max(300, { message: "Glucose must be 300 or less" }),
    skin_thickness: z.number().min(0, { message: "Skin Thickness must be a non-negative number" }).max(100, { message: "Skin Thickness must be 100 or less" }),
    insulin: z.number().min(0, { message: "Insulin must be a non-negative number" }).max(900, { message: "Insulin must be 900 or less" }),
    bmi: z.number().min(0, { message: "BMI must be a non-negative number" }).max(100, { message: "BMI must be 100 or less" }),
    diabetes_pedigree: z.number().min(0, { message: "Diabetes Pedigree must be a non-negative number" }).max(2.5, { message: "Diabetes Pedigree must be 2.5 or less" }),
    age: z.number().min(0, { message: "Age must be a non-negative number" }).max(120, { message: "Age must be 120 or less" })
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    errors.value = []
    const result = schema.safeParse(state)

    if (!result.success) {
        errors.value = result.error.errors.map(err => err.message)
    } else {
        // Handle successful form submission
        console.log('Form data is valid:', result.data)
    }
}
</script>