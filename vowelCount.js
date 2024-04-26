// function getCount(str) {
//   let splittedStr = str.split("");
//   let words = "";
//   for (let i = 0; i < splittedStr.length; i++) {
//     const element = splittedStr[i];
//     if (element === "a" || element === "i" || element === "u" || element === "e" || element === "o") {
//       words += element;
//     }
//   }
//   return words.split("").length;
// }
// function getCount(str) {
//   return str.split("").filter((i) => i === "a" || i === 'e').length;
// }
const getCount = (str) => str.match(/[aiueo]/gi)?.length || 0;

console.log(getCount("abracadabreaeea"));
console.log(getCount("my pyx"));
