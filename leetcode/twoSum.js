// var twoSum = function (nums, target) {
//   let arr = [];
//   let first = nums[0];
//   let last = nums[1];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       console.log(nums[i]);
//       console.log(nums[j]);
//       if (nums[i] + nums[j] === target) {
//         console.log(nums[i]);
//         console.log(nums[j]);
//         arr.push(i, j);
//       }
//     }
//   }
//   return [...new Set(arr)];
// };

// var twoSum = (nums, target) => {
//   let arr = [];
//   let init = nums[0];
//   for (const i of nums) {
//     console.log(nums[3]);
//   }
// };
// var twoSum = function (nums, target) {
//   let arr = [];
//   return nums.map((val, i) => val);
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// var twoSum = (nums, target) => {
//   let arr = [];
//   return nums.map((val, i) => nums.map((val2, j) => (val + val2 === target ? val : 0)));
// };
// console.log(twoSum([-1, -2, -3, -4, -5], -8));

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

var twoSum = function (nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(numMap);
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
