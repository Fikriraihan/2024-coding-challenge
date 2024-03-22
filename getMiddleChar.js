function getMiddle(s) {
  const split = s.split("");
  //   return s.length % 2 === 0 ? `${split[s.length / 2 - 1]}${split[s.length / 2]}` : `${split[Math.floor(split.length / 2)]}`;
  return s.substr(1, 2);
}

console.log(getMiddle("test"));
console.log(getMiddle("teste"));
