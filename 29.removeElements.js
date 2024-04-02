// Coding Challenge 2024 29/366
// Remove Every Other
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// 8 Kyu

function removeEveryOther(arr) {
  return arr.filter((val, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello again"]));
console.log(removeEveryOther([1, 2]));
