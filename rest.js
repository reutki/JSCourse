const log = function (a, b, ...restOperator) {
  console.log(a, b, restOperator);
};

log("basic", "rest", "text", "banana", "ice cream");
//itemii ce vor trece in rest operator  vor fi intr-un array

const calcOrDouble = function (number, basis = 1) {
  console.log(number * basis);
};
calcOrDouble(3);
