const now = new Date();
console.log(now.setHours(18));
console.log(now);
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getSeconds());

let start = new Date();

for (let i = 0; i < 100000000; i++) {
  let some = i ** 3; //power operator is **
}

let end = new Date();

alert(`Cicle worked in ${end - start} miliseconds`);
function salut() {
  alert("salut Sofia!");
}
