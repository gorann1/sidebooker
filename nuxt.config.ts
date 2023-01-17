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
  css: [
    "virtual:windi-base.css",
    "virtual:windi-components.css",
    "virtual:windi-utilities.css",
  ],
  modules: [
    "@sidebase/nuxt-auth",
    "@huntersofbook/naive-ui-nuxt",
    "@vueuse/nuxt",
    "unplugin-icons/nuxt",
    "@intlify/nuxt3",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-windicss",
    "@nuxthq/ui",
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },

  ui: {
    prefix: "tw",
    colors: {
      primary: "blue",
    },
  },
});
