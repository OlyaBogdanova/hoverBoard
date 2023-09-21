const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", (e) => setColor(e.target));
  square.addEventListener("mousemove", (e) => removeColor(e.target));
  container.appendChild(square);
}

function setColor(target) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  target.style["background-color"] = color;
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(target) {
  setTimeout(() => {
    target.style["background-color"] = "#1d1d1d";
    target.style.boxShadow = "0 0 2px #000";
  }, 500);
}
