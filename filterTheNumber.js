// var filterString = function (value) {
//   const filtered = value.split("").map((i) => Number(i));
//   console.log(isNaN(filtered));
//   return +(result = filtered.filter((x) => isNaN(x) === false).join(""));
// };

const filterString = (value) => value.replace(/\D/g, "");

console.log(filterString("123abc"));
console.log(filterString("123"));
