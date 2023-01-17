// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // css
  css: [],
  modules: [
    "@nuxtjs/tailwindcss",
    "@sidebase/nuxt-auth",
    "@huntersofbook/naive-ui-nuxt",
    "@vueuse/nuxt",
    "unplugin-icons/nuxt",
    "@intlify/nuxt3",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },
});
