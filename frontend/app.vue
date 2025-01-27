<template>
  <div class="app">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title}` : 'Diabetes Prediction',
})
</script>
