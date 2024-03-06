// Coding Challenge 2024 5/366
// Count By X
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// 8 kyu

// function countBy(x, n) {
//   let z = 1;
//   for (let i = x; i < n.length; i++) {
//     const element = n[i];
//     z = element;
//   }

//   return z;
// }

// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => x * (i + 1));

console.log(1 * 2);

console.log(countBy(2, 5));
console.log(countBy(1, 10));
