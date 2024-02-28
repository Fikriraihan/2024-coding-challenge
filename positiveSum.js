// Coding Challenge 2024 5/366
// Positive Sum
// https://www.codewars.com/kata/5715eaedb436cf5606000381
// 8 kyu

// function positiveSum(arr) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
//     if (element > 0) {
//         num += element
//     }
//   }
//   return num;
// }

// const positiveSum = (arr) => (arr.length > 0 ? arr.reduce((x, y) => (y > 0 ? x + y : x), 0) : 0);
const positiveSum = (arr) => arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);

console.log(positiveSum([0, 1, 2, -3]));
