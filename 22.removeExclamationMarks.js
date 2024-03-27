// Coding Challenge 2024 22/366
// Remove Exclamation Marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// 8 Kyu

// function removeExclamationMarks(s) {
//   return s.replace(/!/g, "");
// }
// function removeExclamationMarks(s) {
//   let words = "";
//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     if (element !== "!") {
//       words += element;
//     }
//   }
//   return words;
// }

const removeExclamationMarks = (s) => s.split("!").join("");

console.log(removeExclamationMarks("Hello World!!!!!!"));
