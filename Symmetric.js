function sym(args, args2) {
  const arr = [];
  const sortedArgs = args.sort((x, y) => x - y);
  const sortedArgs2 = args2.sort((x, y) => x - y);

  for (let i = 0; i < sortedArgs2.length; i++) {
    if (sortedArgs2[i] !== sortedArgs[i]) {
      arr.push(sortedArgs[i]);
      arr.push(sortedArgs2[i]);
    }
  }
  const sortedArr = arr.sort((x, y) => x - y).filter((i) => Number(i));
  const arr2 = [];
  for (let j = 0; j < sortedArr.length; j++) {
    if (sortedArr[j + 1] !== sortedArr[j]) {
      arr2.push(sortedArr[j]);
    }
  }
  return arr2
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
