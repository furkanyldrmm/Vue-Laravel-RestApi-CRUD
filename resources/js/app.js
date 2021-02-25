

require('./bootstrap');

import Vue from 'vue';


Vue.component('hadi', require('../views/examp.vue').default);



const app = new Vue({
    el: '#app'
});
