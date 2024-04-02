// Coding Challenge 2024 28/366
// Do i get a bonus?
// https://www.codewars.com/kata/56f6ad906b88de513f000d96
// 8 Kyu

function bonusTime(salary, bonus) {
  //   return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
  return `\u00A3${bonus ? salary * 10 : salary}`;
}

console.log(bonusTime(10, true));
// "\u00A3";
