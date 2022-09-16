// Dynamic Typing

//toString

// 1) String method
console.log(typeof String(null)); //string
console.log(typeof String(3)); //string

// 2)concatination

console.log(typeof (5 + "")); //string

const num = 5;

console.log("https://vk.com/catalogue/" + num); //old way through dynamic string

const fontSize = 26 + "px";

//toNumber

//1)
console.log(typeof Number("4")); //number !do not use

//2)
console.log(typeof Number(+"4")); //number through unary method(the plus in front)

//3)
console.log(typeof parseInt("15px", 10)); //number through parseInt

//!Everything the user imputs, is read as STRING

//toBoolean

//false
//! 0,'',null,undefined,NaN

//true
//!everything else

let switcher = null;
if (switcher) {
  console.log("working...");
}
//! will not work cause it is false

switcher = 1;
if (switcher) {
  console.log("working...");
}
//! will work cause it is True

// 2)

console.log(typeof Boolean("4"));
// 3)

console.log(typeof !!"4"); //
