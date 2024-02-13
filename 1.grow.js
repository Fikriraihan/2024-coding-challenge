// Coding Challenge 2024 1/366
// Multiply all indexes inside array;
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x) {
//   let result = x[0];

//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// function grow(x) {
//   return x.reduce((acc, curr) => acc * curr, 1);
// }

// const grow = x => eval(x.join('*'));
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3, 4]));
