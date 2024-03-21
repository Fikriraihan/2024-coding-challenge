// Coding Challenge 2024 15 / 366
// Sum without highest & lowest
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
// 8 Kyu

// function sumArray(array) {
//   // if (array !== null && array.length > 2) {
//   //   let sortedArr = array !== null ? array.sort((x, y) => x - y) : null;
//   //   let highest = sortedArr[array.length - 1];
//   //   let lowest = sortedArr[0];
//   //   let filteredArr = sortedArr.filter((x, i) => x !== sortedArr[0] && x !== sortedArr[array.length - 1]);
//   //   // let result = filteredArr.reduce((acc, curr) => acc + curr);
//   //   return filteredArr;
//   // } else return 0;
//   let highest = array !== null ? array.findLast((element) => element) : null;
//   return highest
// }

// function sumArray(array) {
//   if (array === null || array?.length <= 2) return 0;
//   const sorted = array.sort((x, y) => x - y);
//   let result = 0;
//   for (let i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }
// function sumArray(array) {
//   if (array !== null) {
//     return array
//       .sort((x, y) => x - y)
//       .slice(1, array.length - 1)
//       .reduce((acc, curr) => acc + curr, 0);
//   } else return 0;
// }

const sumArray = (array) =>
  array == null || array.length <= 2
    ? 0
    : array
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr);

console.log(sumArray([0, 1, 2]));
console.log(sumArray([2, 6, 8]));
console.log(sumArray([0, 1]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([3, 1, 2]));

console.log(sumArray(null));
