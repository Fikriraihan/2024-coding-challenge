// // Coding Challenge 2024 17/366
// Area Or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// 8 Kyu

// const areaOrPerimeter = function (l, w) {
//   return l === w ? l * w : l * 2 + w * 2;
// };

const areaOrPerimeter = function (l, w) {
  if (l !== w) return l * 2 + w * 2;
  return l * w;
};

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
