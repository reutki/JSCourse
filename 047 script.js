"use strict";

//classes in ES6

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(2, 4);
const squareLong = new Rectangle(4, 77);

console.log(square.calcArea());
console.log(squareLong.calcArea());

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, color) {
    super(); //gets the contructor of the parent class
  }
}
