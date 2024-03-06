// function getSum(a, b) {
//   let arr = [];

//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       arr.push(i);
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       arr.push(i);
//     }
//   }

//   return a !== b ? arr.reduce((acc, curr) => acc + curr, 0) : a;
// }

// const getSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   console.log(max);
//   console.log(min);
//   return ((max - min + 1) * (min + max)) / 2;
// };
// const getSum = (a,b) => a !== b ? a + b : a

// console.log(getSum(1, 5));
function getSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + getSum(a + 1, b);
  else return a + getSum(a - 1, b);
}
console.log(getSum(0, 5));
// console.log(getSum(5, 1));
// console.log(getSum(552, 562));
