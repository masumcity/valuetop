// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-meilisearch', '@nuxt/image'],
  image: {
    format: ['webp']
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: '~/plugins/vue-easy-lightbox.js', mode: 'client' }],
  meilisearch: {
    hostUrl:  'https://quick.comcitybd.com/', //required
    searchApiKey: 'RRrpdBf6vRrp2nJbWQGZWVwg5LGITU0P', // required
    adminApiKey: 'RRrpdBf6vRrp2nJbWQGZWVwg5LGITU0P', // optional
    serverSideUsage: true // default: false
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Value-Top',
      description: 'Manufacturer Of Best Computer Accessories In Bangladesh'
    }
  }
})