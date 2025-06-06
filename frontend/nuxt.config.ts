// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  debug: true,
  modules: ['@nuxt/ui', '@nuxt/icon', '@pinia/nuxt'],
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000'
    }
  }
})