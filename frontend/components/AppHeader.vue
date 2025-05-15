<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const items = ref<AccordionItem[]>([
    {
        label: 'Instruction',
        icon: 'i-heroicons-information-circle',
        content: `
         <div class="text-left bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
            <h2 class="text-center text-md font-semibold text-blue-700 mb-4">How to Use Diabetes Prediction Tool</h2>
            <p class="text-sm text-gray-700 mb-4">
                Follow the instructions below to predict your diabetes risk based on your health metrics:
            </p>
            <ul class="text-sm list-disc pl-5">
                <li>
                <strong class="font-medium">Step 1:</strong> Enter your health information.
                <p class="text-gray-600">
                    Input your health metrics such as age, weight, height, blood pressure, and other key indicators that affect your diabetes risk.
                </p>
                </li>
                <li>
                <strong class="font-medium">Step 2:</strong> Click on the "Submit" button.
                <p class="text-gray-600">
                    Once you've filled out all required fields, click the "Submit" button to calculate your diabetes risk.
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
        
            <div class="mt-4 text-left">
                <p class="text-gray-600 text-sm">
                Remember, this tool provides an estimate based on the data you enter and should not replace professional medical advice.
                </p>
            </div>
        </div>
        `,
    },
    {
        label: 'Warning and Important Notice',
        icon: 'i-heroicons-exclamation-circle',
        content: `
        <div id="alert-additional-content-1"
            class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 w-full max-w-full text-left" role="alert">
            <div class="mt-2 mb-4 text-sm">
                The diabetes prediction provided by this tool is not accurate and should not be used as a substitute for
                professional medical advice. Please consult a healthcare provider for a proper diagnosis.
            </div>
        </div>
        `
    }
]);
</script>
<template>
    <header class="flex justify-center w-full pt-10 px-4">
        <div class="flex flex-col items-center text-center">
            <div class="flex items-center mb-4">
                <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Diabetes Prediction
                </h1>
                <img src="/img/diabetes.svg" alt="Icon" class="w-16 h-16 ml-2" />
            </div>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
                Predict your diabetes risk based on health metrics.
            </p>
            <div class="w-full max-w-2xl mx-auto">
                <UAccordion :items="items">
                    <template #content="{ item }">
                        <div v-html="item.content"></div>
                    </template>
                </UAccordion>
            </div>
        </div>
    </header>
</template>