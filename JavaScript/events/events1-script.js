const btn = document.querySelector(".off");

// Add your code here

btn.addEventListener("click", () => {
  btn.textContent =
    btn.textContent === "Machine is off" ? "Machine is on" : "Machine is off";
});
