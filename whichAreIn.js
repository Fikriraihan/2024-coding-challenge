// function inArray(array1, array2) {
//   let arr = [];
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array2[j].includes(array1[i])) {
//         arr.push(array1[i]);
//       }
//     }
//   }
//   return [...new Set(arr)].sort();
// }

const inArray = (array1, array2) => array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();

// let = a1 = ["xyz", "live", "strong"];
let a1 = ["live", "strong", "arp"];
let = array1 = ["live", "strong", "lyal", "lysh", "arp"];
let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let = a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(array1, array2));
