<template>
  <div class="h-full flex flex-col flex-1">
    <History />
  </div>
</template>

<script setup lang="ts">
import History from '~/components/History.vue'
import { useDiabetesStore } from '~/stores/diabetes'
import { onMounted } from 'vue'

const diabetesStore = useDiabetesStore()
onMounted(() => {
  diabetesStore.loadHistory()
})
</script>