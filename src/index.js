const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
let shown = true;

const toggleText = function () {
  if (shown) {
    btn.innerHTML = "Hide text!";
    text.innerHTML = "Show this text! 👀";
  } else {
    btn.innerHTML = "Show text!";
    text.innerHTML = "Hide this text! 🙈";
  }

  shown = !shown;
};

document.addEventListener("click", (e) => {
  console.log(e.target);
  toggleText();
});
