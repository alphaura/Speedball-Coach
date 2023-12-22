
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"

import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA-M7FA8OqeXe3K5NxcrxVhuu2A_jZU3S4",
authDomain: "speedball-coach.firebaseapp.com",
projectId: "speedball-coach",
storageBucket: "speedball-coach.appspot.com",
messagingSenderId: "189427787225",
appId: "1:189427787225:web:ba072e0269249f354365c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const selfReview = ref(database, "selfReview")