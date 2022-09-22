const btns = document.querySelectorAll("button");
const wrapper = document.querySelector(".btn-block");
// // console.log(btns[0].classList.length); //pentru a gasi cate clase are acel obiect

// // console.log(btns[0].classList.add("red")); //pentru a mai adauga o clasa la itemul selectat
// // console.log(btns[0].classList.remove("blue")); //pentru a sterge o clasa la itemul selectat
// console.log(btns[0].classList.toggle("blue")); //adauga sau sterge clasa data daca a fost sau nu scrisa deodata

// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }

btns[1].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) {
  //     btns[1].classList.add("red");
  //   } else {
  //     btns[1].classList.remove("red");
  //   }
  btns[1].classList.toggle("red");
});

// wrapper.addEventListener("click", (e) => {
//   if (e.target && e.target.classList.contains("blue")) {
//     console.log("I am a button");
//   }
// });
// wrapper.addEventListener("click", (e) => {
//   if (e.target && e.target.tagName == "BUTTON") {
//     console.log("I am a button");
//   }
// });

// wrapper.addEventListener("click", (e) => {
//   if (e.target && e.target.matches("button.red")) {
//     console.log("I am a button");
//   }
// });

btns.forEach((btn) => {
  addEventListener("click", () => {
    console.log("I am a button");
  });
});

// const btn = document.createElemenet("button");
// btn.classList.add("red");
// wrapper.append(btn);
