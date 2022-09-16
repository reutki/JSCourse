"use strict";
const box = document.getElementById("box");
console.log(box);

const buttons = document.getElementsByTagName("button");

console.log(buttons[0]);

const circles = document.getElementsByClassName("circle");

console.log(circles);
//older methods <-

//newer methods ->

const hearts = document.querySelectorAll(".heart");
//takes all the elements

hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector(".heart");

console.log(oneHeart);
