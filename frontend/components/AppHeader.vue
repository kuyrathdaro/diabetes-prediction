<template>
    <header>
        <div class="flex flex-col items-center text-center">
            <div class="flex items-center mb-4">
                <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Diabetes Prediction</h1>
                <img src="/img/diabetes.svg" alt="Icon" class="w-16 h-16 mr-2">
            </div>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Predict your diabetes risk
                based on health metrics.</p>
        </div>
        <Alert />
        <Instruction ?></Instruction>
    </header>
</template>