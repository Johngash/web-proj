const body = document.querySelector("body"),
  button = document.querySelector('button')

const numsLetters = [0, 1, 2, 3, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function changecolor() {
  let bgcl = "#"
  for (let i = 0; i < 6; i++) {
    bgcl += numsLetters[Math.floor(Math.random() * 15)]
  }
  return bgcl
}
button.addEventListener("click", () => {
  body.style.background = `linear-gradient(to bottom right, ${changecolor()}, ${changecolor()}`
});

