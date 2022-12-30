import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxjHM29nTsQ1R1Nnfma2APa_CS7TmrxyI",
    authDomain: "chat-e43f6.firebaseapp.com",
    projectId: "chat-e43f6",
    storageBucket: "chat-e43f6.appspot.com",
    messagingSenderId: "897553036477",
    appId: "1:897553036477:web:e50db15810eb6f7f9ef3d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.db = db;
createApp(App).use(router).mount('#app')
