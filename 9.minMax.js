// Coding Challenge 2024 9/366
// Min Max
// https://www.codewars.com/kata/577a98a6ae28071780000989
// 8 kyu

// var min = function (list) {
//   list.sort((x, y) => x - y);
//   return list[0];
// };
const min = (num) => Math.min(...num);

// function min(list) {
//   let minValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// }
// function max(list) {
//   let maxValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (maxValue > list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// }

// var max = function (list) {
//   list.sort((x, y) => y - x);
//   return list[0];
// };
var max = function (list) {
  return Math.max(...list);
};
// var max = function (list) {
//   var maxs = list.reduce(function (a, b) {
//     return Math.max(a, b);
//   });
//   return maxs;
// };

console.log(min([1, 2, 3, 4, 5, 9, 10, 13, 0]));
console.log(max([1, 2, 3, 4, 5, 9, 10, 13, 0]));
