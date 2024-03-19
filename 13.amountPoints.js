// Coding Challenge 2024 13/366
// Amount Points
// https://www.codewars.com/kata/5bb904724c47249b10000131
// 8 Kyu

// function points(games) {
//   let points = 0;
//   for (let i = 0; i < games.length; i++) {
//     let x = games[i][0];
//     let y = games[i][2];
//     if (x > y) {
//       points += 3;
//     } else if (x === y) {
//       points += 1;
//     } else {
//       points += 0;
//     }
//   }
//   return points;
// }

const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);

console.log(points(["1:1", "2:1", "3:1", "1:3"]));
