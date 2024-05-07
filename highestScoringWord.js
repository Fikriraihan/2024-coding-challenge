function high(x) {
  const charMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let arr = [];

  const splitted = x.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    const element = [...splitted[i]];
    arr.push(element);
  }
  const arrNumber = arr.map((i) => i.map((j) => charMap[j]).reduce((acc, x) => acc + x));
  console.log(arrNumber);
  const max = Math.max(...arrNumber);
  const index = arrNumber.indexOf(max);
  return arr[index].join("");
}

// function high(s) {
//   return s.split(" ").map((s) => [...s].reduce((a, b) => a + b.charCodeAt() - 96, 0));
// }

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
