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
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },
  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
});
