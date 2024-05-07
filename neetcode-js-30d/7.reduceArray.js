// var reduce = function (nums, fn, init) {
//   let res = init;

//   for (const n of nums) {
//     res = fn(res, n);
//   }
//   return res;
// };
var reduce = function (nums, fn, init) {
  let res = init;

  nums.forEach((n) => {
    console.log(res);
    res = fn(res, n);
  });

  return res;
};

console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0));
