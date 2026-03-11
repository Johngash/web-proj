const body = document.querySelector("body")
const button = document.querySelector("button")
const numLetters = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
function changeBackgroundColor() {
  let bgcl = "#"
  for (let i = 0; i < 6; i++) {
    bgcl += numLetters[Math.ceil(Math.random() * 15)]
  }
  return bgcl
}

button.addEventListener("click", () =>
  body.style.backgroundColor = changeBackgroundColor()
)


window.alert('hi')








































