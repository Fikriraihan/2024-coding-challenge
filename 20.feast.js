// Coding Challenge 2024 20/366
// The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d
// 8 Kyu

// function feast(beast, dish) {
//   const beastStart = beast.split("").slice(0, 1).join();
//   const beastEnd = beast.split("").slice(-1).join();
//   const dishStart = dish.split("").slice(0, 1).join();
//   const dishEnd = dish.split("").slice(-1).join();
//   return beastStart === dishStart && beastEnd === dishEnd;
// }
// function feast(beast, dish) {
//   const beastSplit = beast.split("");
//   const dishSplit = dish.split("");
//   return beastSplit[0] === dishSplit[0] && beastSplit[beast.length - 1] === dishSplit[dish.length - 1];
// }

// const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
