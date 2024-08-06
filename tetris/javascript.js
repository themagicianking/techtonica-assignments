function createBackground() {
  const backgroundContainer = document.querySelector(".puzzle-container");
  for (let i = 0; i < 200; i++) {
    let box = document.createElement("div")
    box.classList.add("box");
    backgroundContainer.appendChild(box);
  }
}

createBackground();