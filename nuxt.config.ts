// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4
  },

  hub: {
    workers: true
  },

  css: ['~/assets/style/main.css'],

  runtimeConfig: {
    twitch: {
      clientId: '',
      clientSecret: ''
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxthub/core',
    'motion-v/nuxt'
  ],
})
