import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import '@/assets/css/libs/bootstrap.min.css';
import '@/assets/css/libs/Pe-icon-7-stroke.css';
import '@/assets/css/style.css';
import App from './App.vue';
import router from './router';

Vue.use(VueCarousel);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
