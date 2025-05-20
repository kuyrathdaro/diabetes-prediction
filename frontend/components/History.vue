<template>
    <div class="flex flex-col p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Prediction History</h2>
        <template>
            <UTable sticky :data="data" class="flex-1 max-h-[312px]" />
        </template>
        <div v-if="!data.length" class="text-gray-500 text-center mt-6">
            No prediction history found.
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDiabetesStore } from '~/stores/diabetes';
import { computed } from 'vue';

const diabetesStore = useDiabetesStore();

onMounted(() => {
  diabetesStore.loadHistory();
});

const data = computed(() => {
    return diabetesStore.history.map((item) => ({
        ...item,
        prediction: item.prediction ? 'Diabetic' : 'Not Diabetic',
    }));
});
</script>