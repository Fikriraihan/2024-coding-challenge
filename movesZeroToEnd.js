// function moveZeros(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return arr.filter((i) => i !== 0).concat(result);
// }

const moveZeros = (arr) => arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0));

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
