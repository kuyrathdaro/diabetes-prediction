<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const items = ref<AccordionItem[]>([
  {
    label: 'Instruction',
    icon: 'i-heroicons-information-circle',
    content: `
      <div class="text-left bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
        <p class="text-sm text-gray-700 mb-4">
          Follow the instructions below to predict your diabetes risk based on your health metrics:
        </p>
        <ul class="text-sm list-disc pl-5">
          <li>
            <strong class="font-medium">Step 1:</strong> Enter your health information.
            <p class="text-gray-600">
              Provide your health metrics such as age, BMI, blood pressure, glucose levels, and other relevant data.
            </p>
          </li>
          <li>
            <strong class="font-medium">Step 2:</strong> Click on the "Predict" button.
            <p class="text-gray-600">
              Once you've filled out all required fields, click the "Predict" button to calculate your diabetes risk.
            </p>
          </li>
          <li>
            <strong class="font-medium">Step 3:</strong> View your prediction result.
            <p class="text-gray-600">
              After submitting, you will see your risk prediction on the screen. The result will help you understand your risk level.
            </p>
          </li>
          <li>
            <strong class="font-medium">Step 4:</strong> Take necessary actions based on the result.
            <p class="text-gray-600">
              If your risk is high, consider consulting with a healthcare professional for further assessment and guidance.
            </p>
          </li>
        </ul>
      </div>
    `,
  },
  {
    label: 'Warning and Important Notice',
    icon: 'i-heroicons-exclamation-circle',
    content: `
      <div class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 text-left" role="alert">
        <div class="mt-2 mb-4 text-sm">
          The diabetes prediction provided by this tool is not accurate and should not be used as a substitute for
          professional medical advice. Please consult a healthcare provider for a proper diagnosis.
        </div>
        <div class="mt-4 text-left">
          <p class="text-red-800 text-sm">
            Remember, this tool provides an estimate based on the data you enter and should not replace professional medical advice.
          </p>
        </div>
      </div>
    `,
  },
]);
</script>

<template>
  <div class="w-full">
    <UAccordion :items="items">
      <template #content="{ item }">
        <div v-html="item.content"></div>
      </template>
    </UAccordion>
  </div>
</template>
