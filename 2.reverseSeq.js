// Coding Challenge 2024 2/366
// Reverse Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/

// const reverseSeq = (n) => {
//   let arr = [];
//   for (let i = n; i > 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// };

// const reverseSeq = (n) => [...Array(n)].map((_, i) => i + 1).reverse();

// Array(n)
//   .fill()
//   .map((_, i) => n - i);

const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);

console.log(reverseSeq(5));
