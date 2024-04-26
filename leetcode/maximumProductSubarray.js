var maxProduct = function (nums) {
  let filtered = nums.filter((i) => i > 0);
  let sorted = filtered.sort();
  let sliced = sorted.slice(-2);
  return sliced.reduce((acc, curr) => acc + curr);
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([2, 1, -2, 4]));
