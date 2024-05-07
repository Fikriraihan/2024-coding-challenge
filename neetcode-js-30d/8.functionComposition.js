// var compose = function (functions) {
//   return function (x) {
//     for (const fn of functions.reverse()) {
//       x = fn(x);
//     }
//     return x;
//   };
// };
// var compose = function (functions) {
//   return function (x) {
//     let reversed = functions.reverse();
//     reversed.forEach((fn) => {
//       x = fn(x);
//     });
//     return x;
//   };
// };
var compose = function (functions) {
  const fn = (acc, f) => f(acc);
  return function (x) {
    return functions.reduceRight(fn, x);
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(0));
