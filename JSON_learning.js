"use strict";
const person = {
  name: "Alex",
  phone: "060780623",
};

console.log(JSON.stringify(person)); //transforms my object into the right format for the server
console.log(JSON.parse(JSON.stringify(person))); //transforms the value of my object in string(just the value, not the key)
