// function sumTwoSmallestNumbers(numbers) {
//   const sort = numbers.sort((x, y) => x - y);
//   return sort[0] + sort[1];
// }

const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr);

console.log(sumTwoSmallestNumbers([1, 2, 3]));
console.log(sumTwoSmallestNumbers([9, 17, 2]));
