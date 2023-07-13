// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Nuxt3-PWA",
      short_name: "Nuxt3-PWA",
      description: "Nuxt3-PWA-Description",
      icons: [
        {
          src: "/icons/icon_64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/icons/icon_128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/icons/icon_256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "/icons/icon_512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
