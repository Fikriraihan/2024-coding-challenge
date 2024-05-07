// function count(string) {
//     const json = {
//       a: 3,
//       b: 2,
//     };
//     const splitted = string.split("");
//     const keys = Object.keys(json);

//     for (let i = 0; i < splitted.length; i++) {
//       if (splitted[i] === keys[i]) {
//         json[keys[i]] += 1;
//       }
//     }

//     return json;
//   }
// function count(string) {
//   //   const json = {
//   //     a: 1,
//   //     b: 0,
//   //     c: 0,
//   //     d: 0,
//   //     e: 0,
//   //     f: 0,
//   //     g: 0,
//   //     h: 0,
//   //     i: 0,
//   //     j: 0,
//   //     k: 0,
//   //     l: 0,
//   //     m: 0,
//   //     n: 0,
//   //     o: 0,
//   //     p: 0,
//   //     q: 0,
//   //     r: 0,
//   //     s: 0,
//   //     t: 0,
//   //     u: 0,
//   //     v: 0,
//   //     w: 0,
//   //     x: 0,
//   //     y: 0,
//   //     z: 0,
//   //   };

//   const json = {
//     a: 0,
//     b: 0,
//   };

//   const sorted = [...string].sort();

//   for (const key in sorted) {
//     if (Object.hasOwnProperty.call(sorted, key)) {
//       //   console.log(string[key] === json[key]);
//       for (const jsonKey in json) {
//         if (Object.hasOwnProperty.call(json, jsonKey)) {
//           if (sorted[key] === jsonKey) {
//             json[jsonKey] += 1;
//           } else {
//             json[sorted[key]] = 1;
//           }
//         }
//       }
//     }
//   }
//   return string.length > 0 ? json : {};
// }

function count(str) {
  var a = str.split("");
  var obj = {};
  a.forEach((s) => {
    obj[s] = (obj[s] || 0) + 1;
  });
  return obj;
}
console.log(count("ab"));
console.log(count("ABCA"));
console.log(count("bb"));

// function count(string) {
//   const json = {
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 1,
//     e: 2,
//     f: 3,
//     g: 0,
//   };
//   const splitted = string.toLowerCase().split("");
//   const keys = Object.keys(json);
//   const mapped = splitted.map((val, i) => json);

//     // return ["a", "b", "c"].includes("a");
//   return mapped;
// }

// console.log(count("abc"));
// console.log(count("abcd"));

// const json = {
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 0,
//     e: 0,
//     f: 0,
//     g: 0,
//     h: 0,
//     i: 0,
//     j: 0,
//     k: 0,
//     l: 0,
//     m: 0,
//     n: 0,
//     o: 0,
//     p: 0,
//     q: 0,
//     r: 0,
//     s: 0,
//     t: 0,
//     u: 0,
//     v: 0,
//     w: 0,
//     x: 0,
//     y: 0,
//     z: 0,
// }
