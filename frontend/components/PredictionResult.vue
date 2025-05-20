<template>
  <UCard class="w-full max-w-md mx-auto bg-white shadow-md border border-gray-100">
    <template #header>
      <div class="text-lg font-semibold text-gray-700 text-center">
        Prediction Result
      </div>
    </template>
    <div class="grid grid-cols-3 gap-y-4 gap-x-4 py-4 px-2 text-base text-gray-800">
      <div class="flex flex-col items-center">
        <span class="font-medium">Pregnancies</span>
        <span>{{ data.pregnancies }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">Glucose</span>
        <span>{{ data.glucose }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">Blood Pressure</span>
        <span>{{ data.blood_pressure }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">Skin Thickness</span>
        <span>{{ data.skin_thickness }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">Insulin</span>
        <span>{{ data.insulin }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">BMI</span>
        <span>{{ data.bmi }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">Diabetes Pedigree</span>
        <span>{{ data.diabetes_pedigree }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-medium">Age</span>
        <span>{{ data.age }}</span>
      </div>
    </div>
    <template #footer>
      <div class="flex flex-col items-center mt-3">
        <span class="font-semibold text-gray-600 mb-1">Prediction:</span>
        <span
          :class="[
            'px-5 py-1 rounded-full font-bold text-white text-base shadow-sm',
            prediction ? 'bg-red-400' : 'bg-green-400'
          ]"
        >
           {{ prediction ? 'Diabetic' : 'Not Diabetic' }}
        </span>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  data: any
  prediction: boolean | null
}>()
</script>