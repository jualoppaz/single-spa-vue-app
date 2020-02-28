/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import VueToastr from 'vue-toastr';
import singleSpaVue from 'single-spa-vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultPreventDuplicates: true,
  defaultTimeout: 0,
});

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-app',
    render: (h) => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
