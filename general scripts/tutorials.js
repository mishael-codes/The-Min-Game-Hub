let closeBtn = document.getElementById("close");
let tutorialContainer = document.getElementsByClassName("tutorial")[0];

closeBtn.addEventListener("click", () => {
  tutorialContainer.style.display = "none";
});
