import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'JRI - TODO List',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#192f64' }
    ],
    meta: [
      { name: 'msapplication-TileColor', content: '#192f64' },
      { name: 'theme-color', content: '#192f64' }
    ]
  },
  autoImports: {
    imports: [
      { name: 'useTodo', from: '@/stores/todo' }
    ]
  },
  css: [
    '~/assets/css/fontiran.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    viewer: false
  }
})
