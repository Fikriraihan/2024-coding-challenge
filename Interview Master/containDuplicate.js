// function containDuplicate(x) {
//   let arr = [];
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === x[i + 1]) {
//       arr.push(x[i]);
//     }
//   }
//   return arr.length > 0;
// }

var containsDuplicate = function (nums) {
  let arr = [];
  const sorted = nums.sort((x, y) => x - y);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      arr.push(sorted[i]);
    }
  }
  return arr.length > 0;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
