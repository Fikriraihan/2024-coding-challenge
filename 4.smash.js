// Coding Challenge 2024 4/366
// Sentence Smash
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/solutions/javascript

// function smash(words) {
//   let arr = [];
//   for (let i = 0; i < words.length; i++) {
//     arr.push(words[i]);
//   }
//   if (arr.length > 0) {
//     return arr.join(" ");
//   }
//   return arr
// }
// function smash(words) {
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     result += words[i];
//     if (i === words.length - 1) {
//       result += "";
//     } else {
//       result += " ";
//     }
//   }
//   return result;
// }

const smash = (words) => words.join(" ");

console.log(smash(["pikri", "rehan", "sakib"]));
console.log(smash(["pikri", "rehan"]));
console.log(smash([]));
