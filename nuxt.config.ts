// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { 
    enabled: true 
  },
  
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  app: {
    head: {
      title: 'SEKARTAMA OFFICIAL SITE',
      meta: [
        { name: 'description', content: 'Situs resmi Sekartama' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },
})