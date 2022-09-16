// //Object oriented programming

// //object - masina
// //prototype - driving

// let str = "some";
// let strObj = new String(str);

// console.log(typeof strObj);
// console.log(typeof str);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("hello!");
  },
};

const john = Object.create(soldier);
//obiectul john va lua prototipul soldatului
john.sayHello();
