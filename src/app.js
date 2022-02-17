import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({ routes })

const app = new Vue({
    router,
    store
}).$mount('#app')