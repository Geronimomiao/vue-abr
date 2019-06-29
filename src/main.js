import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'vue-easytable/libs/themes-base/index.css';
import {VTable,VPagination} from 'vue-easytable';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(iView);
Vue.use(VueAxios,axios);
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
