<script setup lang="ts">
import Alert from "./Alert.vue";
import Instruction from "./Instruction.vue";
const items = ref([
    {
        label: 'Instruction',
        icon: 'i-heroicons-information-circle',
        component: Instruction
    },
    {
        label: 'Important Notice',
        icon: 'i-heroicons-exclamation-circle',
        component: Alert
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
                <UAccordion multiple :items="items">
                    <!-- Accordion Header with Conditional Styling -->
                    <template #header="{ item }">
                        <div class="flex items-center space-x-2 hover:bg-gray-100 px-2 py-1 rounded-md" :class="{
                            'text-red-600 font-semibold': item.label === 'Important Notice',
                            'text-blue-600': item.label === 'Instruction'
                        }">
                            <i :class="item.icon" />
                            <span>{{ item.label }}</span>
                        </div>
                    </template>

                    <!-- Accordion Content Slot -->
                    <template #content="{ item }">
                        <div class="w-full overflow-hidden">
                            <component :is="item.component" :key="item.label" />
                        </div>
                    </template>
                </UAccordion>
            </div>

        </div>
    </header>
</template>