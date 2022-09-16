"use strict";

function first() {
  //do smthing
  setTimeout(function () {
    console.log(1);
  }, 500);
}
function second() {
  //do smthing
  console.log(2);
}

first();
second();

function learnJs(lang, callback) {
  console.log(`i learn: ${lang}`);
  callback();
}
function done() {
  console.log("done!");
}

learnJs("javascript", done);
