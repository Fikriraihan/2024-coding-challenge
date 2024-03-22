function spinWords(str) {
  let strArr = str.split(" ").map((i) => ([...i].length >= 5 ? [...i].reverse().join("") : i));
  let final = strArr.join(" ");
  return final;
}

console.log(spinWords("Welcome"));
console.log(spinWords("Seriously this is the last one"));
console.log(spinWords("Just kidding there is still one more"));
