<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex1 pb-8">
            <slot />
        </main>
        <Footer />
    </div>
</template>