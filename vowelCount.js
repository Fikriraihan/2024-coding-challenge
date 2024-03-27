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
function getCount(str) {
  return str.split("").filter((i) => i === "a" || i === 'e').length;
}

console.log(getCount("abracadabreaeea"));
