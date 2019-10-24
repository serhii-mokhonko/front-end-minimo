import Vue from 'vue'
import App from './App.vue'

//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/src/components/VueFontawesome.vue').default);

new Vue({
  render: h => h(App),
}).$mount('#app')
