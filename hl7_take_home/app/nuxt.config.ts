// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    turso_key :  process.env.TURSO_AUTH_TOKEN,
     turso_url: process.env.TURSO_CONNECTION_URL 
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    },
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content']
})
// config.SOME_PRIVATE_VAR
