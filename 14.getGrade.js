// Coding Challenge 2024 14/366
// Grasshopper - Grade Book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5
// 8 Kyu

// function getGrade(s1, s2, s3) {
//   let result = (s1 + s2 + s3) / 3;
//   if (result <= 100 && result >= 90) {
//     return "A";
//   } else if (result < 90 && result >= 80) {
//     return "B";
//   } else if (result < 80 && result >= 70) {
//     return "C";
//   } else if (result < 70 && result >= 60) {
//     return "D";
//   } else if (result < 60 && result >= 0) {
//     return "F";
//   }
// }

function getGrade(...s) {
  const average = s.reduce((acc, curr) => acc + curr) / s.length;
  return average < 60 ? "F" : average < 70 ? "D" : average < 80 ? "C" : average < 90 ? "B" : "A";
}

console.log(getGrade(70, 71, 72));
console.log(getGrade(62, 71, 75));
console.log(getGrade(90, 91, 92));
