const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const rwd = document.querySelector(".rwd");
const fwd = document.querySelector(".fwd");

const timeWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");

media.removeAttribute("controls");
controls.style.visibility = "visible";

media.addEventListener("click", playPauseMedia);
play.addEventListener("click", playPauseMedia);
stop.addEventListener("click", stopMedia);

rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);

media.addEventListener("timeupdate", setTime);

timeWrapper.addEventListener("click", (e) => {
  const wrapperStartX = getElementStartX(timeWrapper);
  const wrapperEndX = getElementEndX(timeWrapper);
  const localClickX = e.x - wrapperStartX;
  const wrapperLentgh = wrapperEndX - wrapperStartX;
  const xFraction = localClickX / wrapperLentgh;

  media.currentTime = media.duration * xFraction;
});

function playPauseMedia() {
  stopWinding();
  if (media.paused) {
    play.setAttribute("data-icon", "u");
    media.play();
  } else {
    play.setAttribute("data-icon", "P");
    media.pause();
  }
}

function stopMedia() {
  stopWinding();
  media.pause();
  media.currentTime = 0;
  play.setAttribute("data-icon", "P");
}

let intervalRwd;
let intervalFwd;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove("active");

  if (rwd.classList.contains("active")) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add("active");
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove("active");

  if (fwd.classList.contains("active")) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add("active");
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    media.currentTime = 0;
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

function stopWinding() {
  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}

function setTime() {
  const minutes = Math.floor(media.currentTime / 60);
  const seconds = Math.floor(media.currentTime - minutes * 60);

  const minuteValue = minutes.toString().padStart(2, "0");
  const secondValue = seconds.toString().padStart(2, "0");

  const mediaTime = `${minuteValue}:${secondValue}`;
  timer.textContent = mediaTime;

  const barLength =
    timeWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = `${barLength}px`;
}

function getElementStartX(elem) {
  return elem.getBoundingClientRect().left;
}

function getElementEndX(elem) {
  return elem.getBoundingClientRect().right;
}
