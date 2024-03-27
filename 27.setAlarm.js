// Coding Challenge 2024 27/366
// Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// 8 Kyu

// function setAlarm(employed, vacation) {
//   if (employed === true && vacation === true) return false;
//   if (employed === true && vacation === false) return true;
//   if (employed === false && vacation === true) return false;
//   return false;
// }

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
