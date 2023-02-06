import baiduAnalytics from 'vue-baidu-analytics'

// Example for https://github.com/analyticsjs/vue-baidu-analytics/issues/24
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(baiduAnalytics, {
    router: useRouter(),
    siteIdList: ['8dca8e2532df48ea7f1b15c714588691'],
    isDebug: true,
  })
})
