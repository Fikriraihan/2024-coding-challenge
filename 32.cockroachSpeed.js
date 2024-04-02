// Coding Challenge 2024 32/366
// Beginner Series #4 Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
// 8 Kyu

// function cockroachSpeed(s) {
//   return Math.floor((s * 100000) / 3600);
// }
const cockroachSpeed = (s) => ~~((s * 100000) / 3600);

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
