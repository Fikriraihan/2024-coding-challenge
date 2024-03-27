// Coding Challenge 2024 25/366
// Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076
// 8 Kyu

function doubleChar(str) {
  return str
    .split("")
    .map((i) => i + i)
    .join("");
}

console.log(doubleChar("String"));
