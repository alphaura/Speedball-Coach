
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"

// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"


// // Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: "AIzaSyA-M7FA8OqeXe3K5NxcrxVhuu2A_jZU3S4",
// authDomain: "speedball-coach.firebaseapp.com",
// projectId: "speedball-coach",
// storageBucket: "speedball-coach.appspot.com",
// messagingSenderId: "189427787225",
// appId: "1:189427787225:web:ba072e0269249f354365c8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app)
// const selfReview = ref(database, "selfReview")


// Filter section

const allSessionsFilter = document.getElementById("all-sessions")
const doritoFilter = document.getElementById("dorito-sessions");
const snakeFilter = document.getElementById("snake-sessions");
const gunMasteryFilter = document.getElementById("gun-mastery-sessions");

const doritoSessions = document.querySelectorAll(".dorito");
const snakeSessions = document.querySelectorAll(".snake");
const gunMasterySessions = document.querySelectorAll(".gun-mastery")

doritoFilter.addEventListener('click', function() {
    // Hide snake and gunMastery sessions
    snakeSessions.forEach(session => {
        session.style.display = "none";
    });

    gunMasterySessions.forEach(session => {
        session.style.display = "none";
    });

    // Show dorito sessions 
    doritoSessions.forEach( session => {
        session.style.display = "flex"
    });
});

snakeFilter.addEventListener('click', function() {
    // Hide dorito and gun mastery
    doritoSessions.forEach(session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach(session => {
        session.style.display = "none"
    });

    // Show snake sessions
    snakeSessions.forEach (session => {
        session.style.display = "flex"
    });
});

gunMasteryFilter.addEventListener('click', function() {
    // Hide dorito and snake sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    // Show gun mastery sessions
    gunMasterySessions.forEach( session => {
        session.style.display = "flex"
    });
});

allSessionsFilter.addEventListener('click', function() {
    // Shows all of the sessions available
    doritoSessions.forEach( session => {
        session.style.display = "flex"
    });

    snakeSessions.forEach( session => {
        session.style.display = "flex"
    });

    gunMasterySessions.forEach( session => {
        session.style.display = "flex"
    });
});



// // Sliding drill 3 section

// let randomSet = document.querySelector("random-set")
// let getSet = document.getElementById("btn-getSet")
// let arr = ["L1", "L2", "L3", "R1", "R2", "R3","L1", "L2", "L3", "R1", "R2", "R3","L1", "L2", "L3"]

// getSet.addEventListener("click", function() {
//         let getRandomSet = "";
//         // Shuffle the array to get a different order each time
//         const shuffledArr = arr.sort(() => Math.random() - 0.5);

//         // Show only the first 15 elements
//         const selectedSet = shuffledArr.slice(0, 15);

//         for (let i = 0; i < selectedSet.length; i++) {
//             getRandomSet += selectedSet[i] + " ";
//         }

//         randomSet.textContent = getRandomSet.trim();
//     });
