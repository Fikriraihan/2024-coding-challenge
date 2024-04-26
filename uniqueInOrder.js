var uniqueInOrder = function (iterable) {
  const wordsArr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      wordsArr.push(iterable[i]);
    }
  }
  return wordsArr;
};

console.log(uniqueInOrder("aasdfghjkl"));
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
