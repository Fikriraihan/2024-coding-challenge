function findShort(s) {
  const split = s.split(" ");
  let shortest = split[0];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length < shortest.length) {
      shortest = split[i];
    }
  }
  return shortest.length;
}

// const findShort = (s) => s.split(" ").sort((x, y) => x.length - y.length)[0].length;

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Let's travel abroad shall we"));
