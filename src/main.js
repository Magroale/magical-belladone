import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueImageLightbox from 'vue-image-lightbox';
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import VueMeta from 'vue-meta'

Vue.use(VueLazyload)
Vue.component('vue-image-lightbox', VueImageLightbox);

Vue.use(VueMeta, {refreshOnceOnNavigation: true})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
