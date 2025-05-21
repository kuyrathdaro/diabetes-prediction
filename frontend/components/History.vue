<template>
    <div class="flex flex-col p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Prediction History</h2>
        <div class="flex justify-end mb-2">
            <button
                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                @click="clearHistory"
                :disabled="!history.length"
            >
                Clear History
            </button>
        </div>
        <template>
            <UTable sticky :data="history" class="flex-1 max-h-[312px]" />
        </template>
        <div v-if="!history.length" class="text-gray-500 text-center mt-6">
            No prediction history found.
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDiabetesStore } from '@/stores/diabetes'

const diabetesStore = useDiabetesStore()
const { history } = storeToRefs(diabetesStore)

async function clearHistory() {
    await diabetesStore.clearHistory()
}

onMounted(async () => {
    await diabetesStore.loadHistory()
})
</script>