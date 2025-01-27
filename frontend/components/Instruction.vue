<script setup lang="ts">
const items = ref([
  {
    label: 'Instruction',
    icon: 'i-heroicons-information-circle',
    content: `
    <p>To use the diabetes prediction tool, please follow these steps:</p>
      <ol>
        <li>Enter your personal information such as age, gender, and BMI.</li>
        <li>Provide your medical history including blood pressure, glucose levels, and insulin levels.</li>
        <li>Click on the 'Predict' button to get your diabetes risk assessment.</li>
        <li>Review the results and consult with your healthcare provider for further advice.</li>
      </ol>
    `
  }
])
</script>

<template>
  <UAccordion multiple :items="items">
    <template #content="{ item }">
      <div>
        <div>{{ item.content }}</div>
      </div>
    </template>
  </UAccordion>
</template>