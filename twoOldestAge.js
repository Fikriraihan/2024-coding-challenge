// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  let sorted = ages.sort((x, y) => x - y);
  return sorted.slice(-2);
}

console.log(twoOldestAges([1, 3, 10, 9]));
console.log(twoOldestAges([3, 1, 2, 3, 10, 9, 1, 11]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
