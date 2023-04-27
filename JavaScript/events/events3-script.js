const buttonBar = document.querySelector(".button-bar");

// Add your code here
buttonBar.addEventListener("click", (e) => {
  const color = e.target.textContent;
  e.target.style.background = e.target.getAttribute("data-color");
});
