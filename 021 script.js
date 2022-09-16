"use strict";

const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr[99] = 0;
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} in arrayul ${arr}`);
// });

// const str = prompt("", "");

// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// arr.push(10);
// arr.pop();

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }
