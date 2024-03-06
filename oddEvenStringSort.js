function sortMyString(S) {
  let even = S.split("")
    .filter((_, i) => i % 2 === 0)
    .join("");
  let odd = S.split("")
    .filter((_, i) => i % 2 !== 0)
    .join("");
  return `${even} ${odd}`;
}

console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));
