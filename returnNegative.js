// Coding Challenge 2024 5/366
// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102
// 8 kyu

// function makeNegative(num) {
//   return num === 0 ? 0 : num < 0 ? num : -num;
// }

// const makeNegative = (num) => -Math.abs(num)

const makeNegative = (num) => (num === 0 ? 0 : num < 0 ? num : -num);

console.log(makeNegative(13));
