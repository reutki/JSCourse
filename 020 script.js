"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log(Object.keys(options));
  },
};

options.makeTest();
const { border, bg } = options.colors;
console.log(border);

// let counter = 0;

// for (let key in options) {
//   // if (typeof (options[key] === "object"))
//   //   for (let i in options[key]) {
//   //     console.log(`property ${i}, has the value ${options[key][i]}`);
//   counter++;
//   //   }
//   // else {
//   // console.log(`property ${key}, has the value ${options[key]}`);
//   // }
// }
// console.log(counter);
