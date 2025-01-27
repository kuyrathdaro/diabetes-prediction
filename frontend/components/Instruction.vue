<script setup lang="ts">
const items = ref([
  {
    label: 'Instruction',
    icon: 'i-heroicons-information-circle',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  }
])
</script>

<template>
<div class="flex justify-items-center items-center">
    <UAccordion multiple :items="items" />
</div>
</template>