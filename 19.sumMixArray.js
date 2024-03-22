// Coding Challenge 2024 19/366
// Sum Mix Array (Number and String)
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// 8 Kyu

// function sumMix(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += +x[i];
//   }
//   return +("21cmmsaddasdasdsa2");
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr);

console.log(sumMix([9, 3, "7", "3"]));
