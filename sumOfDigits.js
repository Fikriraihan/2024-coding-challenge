// function digitalRoot(n) {
//   const convertedArr = n
//     .toString()
//     .split("")
//     .map((i) => Number(i));

//   if (convertedArr.length === 0) {
//     return null;
//   } else {
//     digitalRoot(10);
//   }
// }

function digitalRoot(n) {
    return (n - 1) % 9 + 1
  }

console.log(digitalRoot(16));
console.log(digitalRoot(456));
