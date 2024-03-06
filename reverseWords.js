function reverseWords(str) {
  let strArr = [...str].reverse().join("");
  let final = strArr.split(" ").reverse();
  return final;
}

console.log(reverseWords("This is example!"));
