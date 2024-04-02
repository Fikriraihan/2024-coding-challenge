// Coding Challenge 2024 33/366
// First non consecutive
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// 8 Kyu

function firstNonConsecutive(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] - 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// function firstNonConsecutive(arr) {
//     return arr.find((e, i) => e !== arr[0] + i) ?? null;
//   }

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
