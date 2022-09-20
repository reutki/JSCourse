const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");
// btn.onclick = function () {
//   alert("Click");
// };
// btn.onclick = function () {
//   alert(" secondClick");
// };

let i = 0;

const incrementElement = (e) => {
  i++;
  console.log(i);
  if (i == 1) {
    btns.removeEventListener("click", incrementElement);
  }
};

// btns.addEventListener("click", incrementElement);
overlay.addEventListener("click", incrementElement);

btns.forEach((btn) => {
  btn.addEventListener("click", incrementElement, { once: true });
});
const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target);
});
