//setTimeout,setInterval

const btn = document.querySelector(".btn");
let timerId,
  i = 0;

function myAnimation() {
  const square = document.querySelector(".box");
  let position = 0;
  const id = setInterval(frame, 10);

  function frame() {
    if (position == 300) {
      clearInterval(id);
    } else {
      position++;
      square.style.top = position + "px";
      square.style.left = position + "px";
    }
  }
}
btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
//   //   const timerId = setTimeout(logger, 2000);  // after a certain time it will run;
//   timerId = setInterval(logger, 500); // it will run over again every 2 seconds
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId); //stops the timer of timerId
//   }
//   console.log("Text");
//   i++;
// }

// // let id = setTimeout(function log() {
//   console.log("hello");
//   id = setTimeout(log, 500);
// }, 500);
