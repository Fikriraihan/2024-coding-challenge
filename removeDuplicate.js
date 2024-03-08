// function solve(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (arr[i] == arr[i + 1]) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// function solve(arr){
//     return arr.filter((val,i) => arr.lastIndexOf(val) == i);
// }

// const solve = arr => [...new Set(arr.reverse())].reverse()

// const findDuplicates = (arr) => {
//   let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
//   // JS by default uses a crappy string compare.
//   // (we use slice to clone the array so the
//   // original array won't be modified)
//   let results = [];
//   for (let i = 0; i < sorted_arr.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//       results.push(sorted_arr[i]);
//     }
//   }
//   return results;
// };

console.log(solve([1, 3, 5, 5, 4, 5, 1]));
console.log(solve([3, 4, 4, 3, 6, 3]));
