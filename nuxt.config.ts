// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','nuxt-icon', '@nuxt/test-utils/module'],
  app:{
    head:{
      link:[
        {rel:"stylesheet" ,href:"//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"}
        ],
      script :[
        {src:"//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"}
      ]
    }
  }
})

