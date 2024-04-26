// return masked string
// function maskify(cc) {
//   const transformed = cc.slice(0, -4);
//   const sliced = cc.slice(-4);
//   let words = "";
//   for (let index = 0; index < transformed.length; index++) {
//     words += "#";
//   }
//   let final = words.concat(sliced);
//   return final;
// }

const maskify = (cc) => `${cc.slice(0, -4).replace(/./gi, "#")}${cc.slice(-4)}`;

console.log(maskify("4556364607935616"));
console.log(maskify("Skippy"));
