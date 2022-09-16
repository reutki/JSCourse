"use strict";

// const str = "teSt";

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

const fruit = "some fruit";
console.log(fruit.indexOf("fruit")); // va scrie de la ce index primim partea de text care cautam

const logg = "salut ma numesc Marcu";
console.log(logg.slice(6, 11)); //numesc

console.log(logg.slice(9, 16).toUpperCase()); //NUMESC
console.log(logg.slice(9)); //numesc Marcu

console.log(logg.substring(9, 16)); //numesc | fix ca slice dar nu primeste numere negative|

console.log(logg.substr(9, 3)); //num | prima cifra de unde sa inceapa(index), a 2 cifra cate unitati avem nevoie dupa index sa le returneze

const num = 12.2;
console.log(Math.round(num)); // Math.round - rodunjeste numarul

const test = "12.2px";
console.log(parseInt(test)); // citeste textul si rotunjeste din text si transforma in number
console.log(parseFloat(test)); // citeste textul si transforma din text si transforma in number
