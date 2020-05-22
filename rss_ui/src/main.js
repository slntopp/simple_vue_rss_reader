import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import 'ant-design-vue/dist/antd.css';
import { Row, Col } from "ant-design-vue";
Vue.use(Row);
Vue.use(Col);

new Vue({
  render: h => h(App),
}).$mount('#app')
