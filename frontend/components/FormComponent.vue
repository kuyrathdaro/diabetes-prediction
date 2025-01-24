<template>
    <form @submit.prevent="handleSubmit">
        <input type="number" v-model="formData.pregnancies" placeholder="Pregnancies" required />
        <input type="number" v-model="formData.glucose" placeholder="Pregnancies" required />
        <input type="number" v-model="formData.skin_thickness" placeholder="Pregnancies" required />
        <input type="number" v-model="formData.insulin" placeholder="Pregnancies" required />
        <input type="number" v-model="formData.bmi" placeholder="Pregnancies" required />
        <input type="number" v-model="formData.diabetes_pedigree" placeholder="Pregnancies" required />
        <input type="number" v-model="formData.age" placeholder="Pregnancies" required />
        <button type="submit">Predict</button>
    </form>
</template>
<script>

</script>