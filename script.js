const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;
let isCurrentGame = true;

const setUnderline = function () {
  if (homeScore > guestScore) {
    homeScoreDisplay.style = "text-decoration: underline;";
    guestScoreDisplay.style = "text-decoration: none;";
  } else if (homeScore === guestScore) {
    guestScoreDisplay.style = "text-decoration: none;";
    homeScoreDisplay.style = "text-decoration: none;";
  } else if (homeScore < guestScore) {
    guestScoreDisplay.style = "text-decoration: underline;";
    homeScoreDisplay.style = "text-decoration: none;";
  }
};

const scoreTracker1 = function (event) {
  const buttonId = event.target.id;
  if (buttonId === "home-1") {
    homeScore += 1;
    homeScoreDisplay.textContent = homeScore;
  } else if (buttonId === "guest-1") {
    guestScore += 1;
    guestScoreDisplay.textContent = guestScore;
  }

  setUnderline();
};

const scoreTracker2 = function (event) {
  const buttonId = event.target.id;
  if (buttonId === "home-2") {
    homeScore += 2;
    homeScoreDisplay.textContent = homeScore;
  } else if (buttonId === "guest-2") {
    guestScore += 2;
    guestScoreDisplay.textContent = guestScore;
  }

  setUnderline();
};

const scoreTracker3 = function (event) {
  const buttonId = event.target.id;
  if (buttonId === "home-3") {
    homeScore += 3;
    homeScoreDisplay.textContent = homeScore;
  } else if (buttonId === "guest-3") {
    guestScore += 3;
    guestScoreDisplay.textContent = guestScore;
  }

  setUnderline();
};

const newGame = function () {
  homeScore = 0;
  guestScore = 0;
  homeScoreDisplay.textContent = homeScore;
  guestScoreDisplay.textContent = guestScore;
  setUnderline();
};
