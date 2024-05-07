// var map = function (arr, fn) {
//   return arr.map(fn);
// };
var map = function (arr, fn) {
  const res = [];

  for (const i in arr) {
    res.push(fn(arr[i], Number(i)));
  }
  console.log(res);
  return res;
};

console.log(map([1, 2, 3], (n) => n + 1));
