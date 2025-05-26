<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-1 flex flex-col pb-8">
            <slot />
        </main>
        <Footer />
    </div>
</template>