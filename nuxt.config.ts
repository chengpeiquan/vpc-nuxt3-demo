import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  app: {
    baseURL: '/vpc-nuxt3-demo/',
  },
})
