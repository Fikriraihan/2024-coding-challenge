function getEvenNumbers(numbersArray) {
  return numbersArray.filter((i) => i % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 5, 6, 7]));
