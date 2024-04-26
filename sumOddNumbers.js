function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(42));
console.log(rowSumOddNumbers(1));
1;

// n* (1+(2n-1))/2 = n^2
// n * (2n)
// 4n-1 = 2n^2
// 2n^2 - 4n + 1 = 0
// (2n + 1)(n + 1)
