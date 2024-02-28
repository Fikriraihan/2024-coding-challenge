// Coding Challenge 2024 5/366
// Square Digits
// https://www.codewars.com/kata/546e2562b03326a88e000020
// 7 kyu

// function squareDigits(num) {
//   const number = [...num.toString()].map((i) => i * i).join("");
//   return Number(number);
// }

const squareDigits = (num) =>
  +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");

console.log(squareDigits(142));
