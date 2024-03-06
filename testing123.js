var number = function (array) {
  return array.map((x, i) => `${i + 1}: ${x}`);
};

console.log(number(["a", "b", "c"]));
console.log(number([]));
