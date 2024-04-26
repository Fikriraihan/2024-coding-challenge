// var filter = function (arr, fn) {
//   return arr.filter(fn);
// };

// var filter = function (arr, fn) {
//   const res = [];
//   arr.forEach((element, i) => {
//     fn(arr[i], i) ? res.push(arr[i]) : null;
//   });
//   return res;
// };

var filter = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(filter([1, 2, 3], (n) => n > 2));
