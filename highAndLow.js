// Coding Challenge 2024 6/366
// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035
// 7 kyu

// function highAndLow(numbers) {
//   let result = numbers.split(" ");
//   let finalResult;
//   let sort = result.map((i) => Number(i)).sort((a, b) => a - b);
//   const lowest = sort[0];
//   const highest = sort[sort.length - 1];
//   console.log(sort);
//   finalResult = highest.toString() + " " + lowest.toString();
//   return finalResult;
// }

function highAndLow(numbers) {
  let number = numbers.split(" ");
  return `${Math.max(...number)} ${Math.min(...number)}`;
}

console.log(highAndLow("8 9 8 3 4 5 1"));
