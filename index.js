let guestScoreEl = document.getElementById("guestscore")
let homeScoreEl = document.getElementById("homescore")

let homeScore = 0
let guestScore = 0

function scorebtn1() {
    homeScore +=1
    homeScoreEl.textContent = homeScore
}

function scorebtn2() {
    homeScore +=2
    homeScoreEl.textContent = homeScore
}

function scorebtn3() {
    homeScore +=3
    homeScoreEl.textContent = homeScore
}

function scorebtn4() {
    guestScore +=1
    guestScoreEl.textContent = guestScore
}

function scorebtn5() {
    guestScore +=2
    guestScoreEl.textContent = guestScore
}

function scorebtn6() {
    guestScore +=3
    guestScoreEl.textContent = guestScore
}

function startgame() {
    guestScore =0
    homeScore =0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}