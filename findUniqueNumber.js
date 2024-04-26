function findUniq(arr) {
  const sorted = arr.sort((x, y) => x - y);
  let arr2;
  const firstNumber = sorted[0];
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i]);
    if (firstNumber !== sorted[i]) {
      console.log(sorted[i]);
      arr2 = sorted[i];
    }
  }
  return arr2;
}

console.log(findUniq([1, 0, 0, -1, 1]));
// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([0, 0, 1]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));
