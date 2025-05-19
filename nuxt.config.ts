// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/style/main.css'],

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxthub/core',
    'motion-v/nuxt'
  ],
})
