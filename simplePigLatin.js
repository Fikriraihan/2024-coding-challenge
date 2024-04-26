// function pigIt(str) {
//   const arr = [];

//   const firstLetter = str.split(" ").map((i) => [...i].shift());
//   const cutted = str.split(" ").map((i) => [...i].slice(1));
//   for (let i = 0; i < cutted.length; i++) {
//     console.log(firstLetter[i]);
//     arr.push(`${cutted[i].join("")}${firstLetter[i]}${firstLetter[i] !== "!" && firstLetter[i] !== '?' ? "ay" : ""}`);
//   }
//   return arr.join(" ");
// }

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}

console.log(pigIt("Pig latin is cool ?"));
console.log(pigIt("O tempora O mores !"));
// console.log(pigIt("This is my string"));
