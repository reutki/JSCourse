// let a = 5,
//   b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(myObj) {
  let objCopy = {};

  for (let key in myObj) {
    objCopy[key] = myObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    s: 3,
    y: 4,
  },
};

const copyNumbers = copy(numbers);

copyNumbers.a = 10;
console.log(copyNumbers);
console.log(numbers);

//Object assign

const add = {
  d: 17,
  e: 20,
};

//adaugi din add in numbers

console.log(Object.assign(numbers, add));
//console.log(Object.assign(unde sa adauge , de unde));

const clone = Object.assign({}, add);
clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ["a", "b", "c"];

const newArray = oldArray.slice(); //copiaza elementele din celalalt array

newArray[1] = "x";
console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newAarray = [...array];

console.log(newAarray);

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q };

console.log(newObj);
