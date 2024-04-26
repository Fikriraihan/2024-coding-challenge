function firstNonRepeatingLetter(s) {
  let sorted = [...s].sort();

  let firstLetter = s[0];
  let arr = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      console.log(s[i]);
      arr.push(sorted[i]);
    }
  }
  let filtered = sorted.filter((v, i) => v !== arr.map((i) => i));
  const result = [...new Set(s + arr)];

  return result;
}

// function firstNonRepeatingLetter(s) {
//   return [...new Set(s)];
// }

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));
