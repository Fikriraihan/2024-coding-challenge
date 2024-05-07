// function pyramid(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push([...Array(i + 1).fill(1)]);
//   }
//   return arr;
// }

const pyramid = (n) =>
  Array(3)
    .fill()
    .map((_, i) => new Array(i + 1).fill(1));
console.log(pyramid(3));
