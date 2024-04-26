// function XO(str) {
//   const lowerCase = str.toLowerCase().split("");
//   const x = lowerCase.filter((i) => i === "x");
//   const o = lowerCase.filter((i) => i === "o");
//   return x.length === 0 && o.length === 0 ? true : x.length === o.length ? true : false;
// }
function XO(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("aamm"));
