// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  }
})
