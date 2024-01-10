// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: '~/plugins/vue-easy-lightbox.js', mode: 'client' }],
  modules: [
    'nuxt-meilisearch'
  ],
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
      description: 'Manufacturer Of Best Computer Accessories In Bangladesh',
    }
  }
})
