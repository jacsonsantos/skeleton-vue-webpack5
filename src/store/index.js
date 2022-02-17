import Vue from 'vue';
import Vuex from 'vuex';
import helloworld from './modules/hello-world';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        helloworld
    }
});

export default store;