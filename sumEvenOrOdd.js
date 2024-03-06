function oddOrEven(array) {
  let sum = array.reduce((acc, curr) => acc + curr);
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 2]));
