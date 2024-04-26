function findOutlier(integers) {
  let arr = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      arr.push(integers[i]);
    }
  }

  let arr2 = [];
  for (let j = 0; j < integers.length; j++) {
    if (integers[j] % 2 !== 0) {
      arr2.push(integers[j]);
    }
  }

  return arr.length === 1 ? Number(arr) : Number(arr2);
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
