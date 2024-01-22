
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