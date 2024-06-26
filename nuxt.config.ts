// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vuetify-nuxt-module'],
  app:
  {
    head:{
      title: 'Bee Shop',
      meta:
      [
       { name:"Bee Shop", content:"bee shop"}
      ],
      link:[
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]

    },

   
  },
  runtimeConfig:{
    currencyAPI:process.env.CURRENCY_API
  }
})