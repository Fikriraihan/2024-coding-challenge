function sortArray(array) {
  let sortedOdd = array.filter((i) => i % 2 !== 0).sort((x, y) => x - y);
  return array.map((val, i) => (val % 2 !== 0 ? sortedOdd.shift() : val));
}

// function sortArray(arr) {
//     const odds = arr
//         .filter(x => x%2)
//         .sort((a, b) => a - b);
//         console.log(odds);
//     return arr
//         .map(x => x%2 ? odds.shift() : x);
// }

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
// console.log(sortArray([5, 3, 1, 8, 0]));
// console.log(sortArray([2, 3, 1, 8, 0]));
