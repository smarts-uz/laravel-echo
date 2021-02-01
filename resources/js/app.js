require('./bootstrap');

require('alpinejs');

import Vue from 'vue'

import Chat from "./components/Chat";

const app = new Vue({
    el: '#app',
    components: {
        chat: Chat
    }
})
