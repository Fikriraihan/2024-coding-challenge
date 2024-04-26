// function isPrime(num) {
//   let tempArr =
//     num > 0
//       ? Array(num)
//           .fill()
//           .map((_, i) => i + 1)
//       : [];
//   let resultArr = [];

//   console.log(tempArr);

//   if (tempArr.length > 0) {
//     for (let i = 0; i < tempArr.length; i++) {
//       const element = tempArr[i];
//       resultArr.push(num / element);
//     }
//   }

//   let final = [];

//   if (resultArr.length > 0) {
//     for (let j = 0; j < resultArr.length; j++) {
//       if (resultArr[j] % 1 === 0) {
//         final.push(true);
//       } else {
//         final.push(false);
//       }
//     }
//   }

//   const finalResult = final.filter((i) => i === true);
//   return finalResult.length === 2 ? true : false;
// }

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    console.log(i);
    if (num % i === 0) {
      return false;
    }
  }
  return num === 1 ? false : num > 0 ? true : false;
}
// console.log(isPrime(73));
console.log(isPrime(1));
console.log(isPrime(2));
// console.log(isPrime(73));
// console.log(isPrime(75));
