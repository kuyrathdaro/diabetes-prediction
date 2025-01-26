<template>
    <div class="flex justify-center items-center">
        <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                    aria-controls="accordion-collapse-body-1">
                    <span>How to use the Diabetes Prediction Form?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-gray-200">
                    <p class="mb-2 text-gray-500">To use the Diabetes Prediction Form, follow these steps:</p>
                    <ol class="list-decimal list-inside text-gray-500">
                        <li>Enter the number of pregnancies in the "Pregnancies" field.</li>
                        <li>Enter your glucose level in the "Glucose" field.</li>
                        <li>Enter your blood pressure in the "Blood Pressure" field.</li>
                        <li>Enter your skin thickness in the "Skin Thickness" field.</li>
                        <li>Enter your insulin level in the "Insulin" field.</li>
                        <li>Enter your BMI (Body Mass Index) in the "BMI" field.</li>
                        <li>Enter your diabetes pedigree function in the "Diabetes Pedigree" field.</li>
                        <li>Enter your age in the "Age" field.</li>
                        <li>Click the "Predict" button to submit the form and get the prediction result.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Instruction'
};
</script>