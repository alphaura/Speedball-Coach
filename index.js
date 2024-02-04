
// Filter section

const allSessionsFilter = document.getElementById("all-sessions")
const doritoFilter = document.getElementById("dorito-sessions");
const snakeFilter = document.getElementById("snake-sessions");
const gunMasteryFilter = document.getElementById("gun-mastery-sessions");
const fitnessFilter = document.getElementById("fitness")
const teamFilter = document.getElementById("team")
const tournamentFilter = document.getElementById("tournament")

const doritoSessions = document.querySelectorAll(".dorito");
const snakeSessions = document.querySelectorAll(".snake");
const gunMasterySessions = document.querySelectorAll(".gun-mastery")
const fitnessSessions = document.querySelectorAll(".fitness")
const teamSessions = document.querySelectorAll(".team")
const tournamentSessions = document.querySelectorAll(".tournament")

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

    teamSessions.forEach( session => {
        session.style.display = "flex"
    });

    tournamentSessions.forEach( session => {
        session.style.display = "flex"
    });

});

doritoFilter.addEventListener('click', function() {
    // Hide snake, gunMastery, fitness, team, and tournament sessions
    snakeSessions.forEach(session => {
        session.style.display = "none";
    });

    gunMasterySessions.forEach(session => {
        session.style.display = "none";
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    teamSessions.forEach( session => {
        session.style.display = "none"
    });

    tournamentSessions.forEach( session => {
        session.style.display = "none"
    });

    // Show dorito sessions 
    doritoSessions.forEach( session => {
        session.style.display = "flex"
    });
});

snakeFilter.addEventListener('click', function() {
    // Hide dorito, gun mastery, fitness, team, and tournament sessions
    doritoSessions.forEach(session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach(session => {
        session.style.display = "none"
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    teamSessions.forEach( session => {
        session.style.display = "none"
    });

    tournamentSessions.forEach( session => {
        session.style.display = "none"
    });

    // Show snake sessions
    snakeSessions.forEach (session => {
        session.style.display = "flex"
    });
});

gunMasteryFilter.addEventListener('click', function() {
    // Hide dorito, snake, fitness, team, and tournament sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    teamSessions.forEach( session => {
        session.style.display = "none"
    });

    tournamentSessions.forEach( session => {
        session.style.display = "none"
    });

    // Show gun mastery sessions
    gunMasterySessions.forEach( session => {
        session.style.display = "flex"
    });
});

fitnessFilter.addEventListener('click', function() {
    //Hides dorito, snake, gun mastery, team and tournament sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach( session => {
        session.style.display = "none"
    });

    teamSessions.forEach( session => {
        session.style.display = "none"
    });

    tournamentSessions.forEach( session => {
        session.style.display = "none"
    });

    //Show fitness sessions
    fitnessSessions.forEach( session => {
        session.style.display = "flex"
    });
});

teamFilter.addEventListener( 'click', function() {
    //Hides dorito, snake, gun mastery, fitness and tournament sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach( session => {
        session.style.display = "none"
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    tournamentSessions.forEach( session => {
        session.style.display = "none"
    });

    //Show team sessions
    teamSessions.forEach( session => {
        session.style.display = "flex"
    });
});

tournamentFilter.addEventListener('click', function() {
    //Hides dorito, snake, gun mastery, fitness and team sessions
    doritoSessions.forEach( session => {
        session.style.display = "none"
    });

    snakeSessions.forEach( session => {
        session.style.display = "none"
    });

    gunMasterySessions.forEach( session => {
        session.style.display = "none"
    });

    fitnessSessions.forEach( session => {
        session.style.display = "none"
    });

    teamSessions.forEach( session => {
        session.style.display = "none"
    });

    //Show tournament sessions
    tournamentSessions.forEach( session => {
        session.style.display = "flex"
    });
});
