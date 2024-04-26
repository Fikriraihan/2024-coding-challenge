function duplicateCount(text) {
  const matcher = text.match(/[a-z]/gi);
  const lower = matcher?.map((i) => i.toLowerCase()).sort();
  const arr = [];
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === lower[i + 1]) {
      arr.push(lower[i]);
    }
  }
  console.log(arr);
  const arr2 = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== arr[j + 1]) {
      arr2.push(arr[j]);
    }
  }
  console.log(arr2);
  return arr2.length;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
