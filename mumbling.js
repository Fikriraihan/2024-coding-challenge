const accum = (s) =>
  s
    .split("")
    .map((val, i) => val.toUpperCase() + val.toLowerCase().repeat(i))
    .join("-");
// function accum(s) {
//   const splitted = s
//     .split("")
//     .map((val, i) => val.replace(val[0], val[0].toUpperCase()))
//     .join("-");

//   return splitted;
// }
console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
