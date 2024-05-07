function incrementString(strng) {
  const isInteger = [];
  let mapping = (strng
    .split("")
    .map((i) => parseInt(i))
    .filter((i) => isNaN(i) === false)
    .join(""));
  let filtered = mapping;
  let converted = +filtered;
  return mapping;
}

console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar0099"));
