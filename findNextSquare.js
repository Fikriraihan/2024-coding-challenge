function findNextSquare(sq) {
  let result = Math.sqrt(sq);
  const floored = Math.floor(result);
  return result - floored === 0 ? Math.pow(++result, 2) : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(120));
