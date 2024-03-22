// // Coding Challenge 2024 16/366
// Mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
// 8 Kyu

// function getAverage(marks) {
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }

// function getAverage(marks) {
//   const sum = marks.reduce((acc, curr) => acc + curr);
//   return Math.floor(sum / marks.length);
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
