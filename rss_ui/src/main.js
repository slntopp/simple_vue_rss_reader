import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false;

import Antd from "ant-design-vue";
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
