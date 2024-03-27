// Coding Challenge 2024 24/366
// Quarter of The Year
// 8 Kyu

// const quarterOf = (month) => {
//   if (month > 0 && month <= 3) return 1
//   if (month > 3 && month <= 6) return 2
//   if (month > 6 && month <= 9) return 3
//   else return 4
// };

// const quarterOf = (month) => (month > 0 && month <= 3 ? 1 : month > 3 && month <= 6 ? 2 : month > 6 && month <= 9 ? 3 : 4);
const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(4));
