// function amountOfPages(summary) {
//   let result = Array(summary)
//     .fill()
//     .map((_, i) => i + 1)
//     .join("").length;
//   return result;
// }
function amountOfPages(summary) {
  let result = 0;
  let i = 1;
  while (result < summary) {
      result += i.toString().length;
      console.log(i);
    i++;
  }
  return i - 1
}

// console.log(amountOfPages(660));
console.log(amountOfPages(25));
