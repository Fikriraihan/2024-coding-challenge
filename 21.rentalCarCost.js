// Coding Challenge 2024 21/366
// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016
// 8 Kyu

// function rentalCarCost(d) {
//   if (d >= 7) return d * 40 - 50;
//   if (d >= 3) return d * 40 - 20;
//   return d * 40;
// }
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}

// const rentalCarCost = d => d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;

console.log(rentalCarCost());
