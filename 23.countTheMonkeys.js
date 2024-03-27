// Coding Challenge 2024 23/366
// Count the monkeys
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// 8 Kyu

// function monkeyCount(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     const element = i;
//     arr.push(element);
//   }
//   return arr;
// }

// function monkeyCount(n) {
//   return Array(n)
//     .fill()
//     .map((_, i) => i + 1);
// }
function monkeyCount(n) {
  return Array.from({ length: n }, (v, i) => i + 1);
}

console.log(monkeyCount(1));
console.log(monkeyCount(2));
console.log(monkeyCount(10));
