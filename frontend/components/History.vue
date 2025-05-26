<template>
    <div class="flex flex-col p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
        <h2 class="text-2xl text-center font-bold mb-4">Prediction History</h2>
        <div class="flex justify-end mb-2">
            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" @click="clearHistory"
                :disabled="!history.length">
                Clear History
            </button>
        </div>
        <template v-if="!loading">
            <UTable sticky :columns="columns" :data="history" class="flex-1 max-h-[312px]" />
            <div v-if="!history.length" class="text-gray-500 text-center mt-6">
            </div>
        </template>
        <div v-else class="text-gray-500 text-center mt-6">
            Loading...
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDiabetesStore } from '@/stores/diabetes'
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'

const loading = ref(true)

const UBadge = resolveComponent('UBadge')
const columns: TableColumn<any>[] = [
    {
        accessorKey: 'id',
        header: '#',
        cell: ({ row }) => `#${row.getValue('id')}`
    },
    {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }) => {
            return new Date(row.getValue('date')).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })
        }
    },
    { accessorKey: 'pregnancies', header: 'Pregnancies' },
    { accessorKey: 'glucose', header: 'Glucose' },
    { accessorKey: 'blood_pressure', header: 'Blood Pressure' },
    { accessorKey: 'skin_thickness', header: 'Skin Thickness' },
    { accessorKey: 'insulin', header: 'Insulin' },
    { accessorKey: 'bmi', header: 'BMI' },
    { accessorKey: 'diabetes_pedigree', header: 'Diabetes Pedigree' },
    { accessorKey: 'age', header: 'Age' },
    {
        accessorKey: 'prediction',
        header: 'Prediction',
        cell: ({ row }) => {
            const value = row.getValue('prediction')
            const color = value ? 'error' : 'success'
            return h(
                UBadge,
                { class: 'capitalize', variant: 'subtle', color },
                () => value ? 'Diabetic' : 'Not Diabetic'
            )
        }
    },
]

const diabetesStore = useDiabetesStore()
const { history } = storeToRefs(diabetesStore)

onMounted(async () => {
    loading.value = true
    await diabetesStore.loadHistory();
    loading.value = false;
});

async function clearHistory() {
        await diabetesStore.clearHistory()
    }
</script>