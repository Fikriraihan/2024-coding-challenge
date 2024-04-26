// function longest(s1, s2) {
//   let arr = [];
//   let arr2 = [];
//   const matcher1 = s1.match(/[a-z]/gi);
//   const matcher2 = s2.match(/[a-z]/gi);
//   const sorted = matcher1.sort((a, b) => (a < b ? -1 : 1));
//   const sorted2 = matcher2.sort((a, b) => (a < b ? -1 : 1));
//   console.log(sorted2);

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] !== sorted[i + 1]) {
//       console.log(sorted[i]);
//       arr.push(sorted[i]);
//     }
//   }

//   for (let j = 0; j < sorted2.length; j++) {
//     if (sorted2[j] !== sorted2[j + 1]) {
//       console.log(sorted2[j]);
//       arr2.push(sorted2[j]);
//     }
//   }

//   const combined = arr2.concat(arr);

//   let finalArr = [];
//   const sortedCombined = combined.sort((a, b) => (a < b ? -1 : 1));
//   for (let k = 0; k < sortedCombined.length; k++) {
//     if (sortedCombined[k] !== sortedCombined[k + 1]) {
//       finalArr.push(sortedCombined[k]);
//     }
//   }
//   return finalArr.join('')
// }

// function longest(s1, s2) {
//   const combined = [...s1, ...s2].sort();
//   let arr = [];
//   for (let i = 0; i < combined.length; i++) {
//     if (combined[i] !== combined[i + 1]) {
//       arr.push(combined[i]);
//     }
//   }
//   return arr.join("");
// }

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(longest("aretheyhere", "yestheyarehere"));
