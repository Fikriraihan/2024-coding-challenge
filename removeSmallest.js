// function removeSmallest(numbers) {
//   let num = Math.min(...numbers);
//   const filteredNumber = numbers.filter((i) => i !== num);
//   return filteredNumber;
// }
// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   console.log(indexOfMin);
//   console.log([...numbers.slice(indexOfMin + 1)]);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(indexOfMin));
// }

const removeSmallest = (numbers) => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

// function removeSmallest(numbers) {
//     let min = Infinity, index
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] < min) min = numbers[index = i]
//     }

//     return numbers.slice(0, index).concat(numbers.slice(index + 1))
//   }

console.log(removeSmallest([2, 1, 3, 1]));
