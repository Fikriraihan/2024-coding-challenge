// function descendingOrder(n) {
//   return Number(
//     [n]
//       .toString()
//       .split("")
//       .sort((x, y) => y - x)
//       .join("")
//   );
// }

const descendingOrder = (n) => n.toString().split("");

console.log(descendingOrder(123));
console.log(descendingOrder(2314));
