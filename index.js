
// Filter section

const allSessionsFilter = document.getElementById("all-sessions")
const doritoFilter = document.getElementById("dorito-sessions");
const snakeFilter = document.getElementById("snake-sessions");
const gunMasteryFilter = document.getElementById("gun-mastery-sessions");
const fitnessFilter = document.getElementById("fitness")

const doritoSessions = document.querySelectorAll(".dorito");
const snakeSessions = document.querySelectorAll(".snake");
const gunMasterySessions = document.querySelectorAll(".gun-mastery")
const fitnessSessions = document.querySelectorAll(".fitness")

doritoFilter.addEventListener('click', function() {
    // Hide snake, gunMastery and fitness sessions
    snakeSessions.forEach(session => {
        session.style.display = "none";
    });

    gunMasterySessions.forEach(session => {
        session.style.display = "none";
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    // Show dorito sessions 
    doritoSessions.forEach( session => {
        session.style.display = "flex"
    });
});

snakeFilter.addEventListener('click', function() {
    // Hide dorito, gun mastery and fitness sessions
    doritoSessions.forEach(session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach(session => {
        session.style.display = "none"
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    // Show snake sessions
    snakeSessions.forEach (session => {
        session.style.display = "flex"
    });
});

gunMasteryFilter.addEventListener('click', function() {
    // Hide dorito, snake and fitness sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    fitnessSessions.forEach( session => {
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

    fitnessSessions.forEach( session => {
        session.style.display = "flex"
    });
});

fitnessFilter.addEventListener('click', function() {
    //Hides dorito, snake and gun mastery sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach( session => {
        session.style.display = "none"
    });

    //Show fitness sessions
    fitnessSessions.forEach( session => {
        session.style.display = "flex"
    });
})