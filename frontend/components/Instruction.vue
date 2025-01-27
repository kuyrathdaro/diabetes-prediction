<script setup lang="ts">
const items = [
    {
        label: "Instruction",
        icon: 'i-heroicons-information-circle',
        defaultOpen: true,
        content: 'Test'
    }
];
</script>

<template>
    <div class="flex justify-center items-center">
        <UAccordion :items="items" />
    </div>
</template>