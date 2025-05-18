<template>
  <footer class="bg-gray-100 text-gray-600 py-6 border-t">
    <div class="container mx-auto px-4 flex flex-col items-center justify-center text-sm text-center gap-2">
      <p class="flex items-center gap-1">
        Made with
        <UIcon name="i-heroicons-heart-solid" class="text-red-500 w-4 h-4" />
        using Nuxt UI & Scikit-learn
      </p>
      <div class="flex gap-4">
        <NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink>
        <NuxtLink to="/terms" class="hover:underline">Terms & Conditions</NuxtLink>
      </div>
    </div>
  </footer>
</template>
