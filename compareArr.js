// function comp(array1, array2) {
//   const sorted2 = array2?.sort((x, y) => x - y);
//   const sorted1 = array1?.sort((x, y) => x - y).map((i) => Math.pow(i, 2));
//   const arr = [];
//   for (let i = 0; i < array1?.length; i++) {
//     if (sorted1[i] === sorted2[i]) {
//       arr.push(true);
//     } else {
//       arr.push(false);
//     }
//   }
//   console.log(arr);
//   return array2 === null && array1.length === 0 ? false : array1 === null && array2.length === 0 ? false : arr.length === 0 ? true : arr.includes(false) ? false : true || [];
// }
function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((i) => i * i)
      .sort()
      .join() == b.sort().join()
  );
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
let a3 = null;
let a4 = [];
let a5 = [];

console.log(comp(a1, a2));
