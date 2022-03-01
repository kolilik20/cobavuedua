import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue'; //Import FriendContact from components

const app = createApp(App);

app.component('friend-contact', FriendContact); //Component

app.mount('#app');