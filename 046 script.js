// "use strict"; - this will be undefined
// ? in this case - this will be Window (the global value)
// "use strict";
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };
// obj.sum();

// function user(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// let ion = new user("Ion", 28);

// function sayName() {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John",
// };

// sayName.call(user, "smith");
// sayName.apply(user, ["smith"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(8));

//!1) a normal function: this - Windows | if ('use strict')=> undefined
//!2)cotext of objects is the object itself.
//!3)this in constructor and classes are new samples of the object
//!4)manual adding of this context: call,apply,bind

const btn = document.querySelector(".btn_this");

btn.addEventListener("click", function () {
  console.log(this);
  //returns our element <button class="btn_this"></button>
  this.style.background = "red"; //will change to red
});

//arrow functions with this
//arrow functions dont have any this context. //!it will take the context above

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
    say(); //this will return the object this-> arrow function(no this context)-> obj.this (found!)
  },
};

obj.sayNumber();
