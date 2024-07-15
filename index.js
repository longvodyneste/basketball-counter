let homeCount = 0;
let guestCount = 0;

const homeCounter = document.getElementById("home-counter");
const guestCounter = document.getElementById("guest-counter");

function incrementHome1(){
    homeCount++;
    homeCounter.textContent = homeCount;
}

function incrementHome2(){
    homeCount += 2;
    homeCounter.textContent = homeCount;
}

function incrementHome3(){
    homeCount += 3;
    homeCounter.textContent = homeCount;
}

function incrementGuest1(){
    guestCount++;
    guestCounter.textContent = guestCount;
}

function incrementGuest2(){
    guestCount += 2;
    guestCounter.textContent = guestCount;
}

function incrementGuest3(){
    guestCount += 3;
    guestCounter.textContent = guestCount;
}

function startNewGame(){
    homeCount = 0;
    guestCount = 0;
    homeCounter.textContent = homeCount;
    guestCounter.textContent = guestCount;
}