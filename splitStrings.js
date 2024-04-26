// function solution(str) {
//   const splitted = str.split("");
//   let arr = [];
//   const evenFiltered = splitted.filter((_, i) => i % 2 !== 0);
//   const oddFiltered = splitted.filter((_, i) => i % 2 === 0);
//   for (let i = 0; i < oddFiltered.length; i++) {
//     if (evenFiltered[i] !== undefined) {
//       arr.push(`${oddFiltered[i] + evenFiltered[i]}`);
//     } else {
//       arr.push(`${oddFiltered[i] + "_"}`);
//     }
//   }
//   return arr;
// }
// function solution(str) {
//   const splitted = str.split("");
//   let arr = [];
//   const evenFiltered = splitted.filter((_, i) => i % 2 !== 0);
//   const oddFiltered = splitted.filter((_, i) => i % 2 === 0);
//   for (let i = 0; i < oddFiltered.length; i++) {
//     arr.push(`${oddFiltered[i] + (evenFiltered[i] || "_")}`);
//   }
//   return arr;
// }

const solution = (str) => (str + "_").match(/../g) || [];

console.log(solution("abcdef"));
console.log(solution(""));
console.log(solution("abcdefg"));
