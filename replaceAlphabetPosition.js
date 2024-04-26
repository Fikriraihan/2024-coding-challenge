// function alphabetPosition(text) {
//   const splitted = text
//     .split("")
//     .filter((val) => val !== " ")
//     .join("");
//   const json = {
//     a: 1,
//     T: 2,
//   };

//   const mappedJson = json.map((i) => i);
//   console.log(splitted.replace("T", mappedJson));
//   const texts = "Fikri";
//   console.log(texts.replace("F", "P"));
// }
function alphabetPosition(text) {
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
  const splittedd = text.split("");
  const regex = text.match(/[a-zA-Z]/gi);
  // .join("")
  // .toLowerCase();

  const joinned = regex !== null ? regex.join("").toLowerCase() : null;

  console.log(joinned);

  return joinned !== null
    ? joinned
        .split("")
        .map((i) => charMap[i])
        .join(" ")
    : "";
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("^![]#%8:"));
console.log(alphabetPosition("2<+,!!7}"));
