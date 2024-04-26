// function towerBuilder(nFloors) {
//   let arr = [];
//   let words = "";
//   for (let i = 0; i < nFloors; i++) {
//     words = "*".repeat(2 * nFloors - 1);
//     arr.push(`${" ".repeat(Math.ceil(nFloors / 2))}${words}${" ".repeat(Math.ceil(nFloors / 2))}`);
//   }
//   return arr;
// }
// function towerBuilder(nFloors) {
//   let arr = [];

//   for (let i = 0; i < nFloors; i++) {
//     const element = 2 * (i + 1) - 1;

//     arr.push(`${"*".repeat(element)}`);
//   }
//   let result = arr.map((val, i) => `${" ".repeat(nFloors - (i + 1))}${val}${" ".repeat(nFloors - (i + 1))}`);
//   return result;
// }
function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    const element = 2 * (i + 1) - 1;
    arr.push(`${" ".repeat(nFloors - (i + 1))}${"*".repeat(element)}${" ".repeat(nFloors - (i + 1))}`);
  }
  return arr;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));

// 1. 1 Kiri 5 Kanan 5
// 2. 3 Kiri 4 Kanan 4
// 3. 5 Kiri 3 Kanan 3
// 4. 7 Kiri 2 Kanan 2
// 5. 9 Kiri 1 Kanan 1
// 6. 11
