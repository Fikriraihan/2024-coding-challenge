// Coding Challenge 2024 8/366
// Counting Sheep
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// 8 kyu

var countSheep = function (num) {
  let sheep = "";
  for (let i = 0; i < num; i++) {
    sheep += `${i + 1} sheep...`;
  }
  return sheep;
};

// var countSheep = function (num) {
//     let sheep = [];
//     for (let i = 0; i < num; i++) {
//       sheep.push(`${i + 1} sheep...`)
//     }
//     return sheep.join('')
//   };

// var countSheep = function (num) {
//   return num > 0 ? [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("") : "";
// };

console.log(countSheep(5));
console.log(countSheep(0));
