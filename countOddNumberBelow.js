// function oddCount(n) {
//   if (n === null || n === undefined || typeof n !== 'number') {
//     return 0;
//   }

//   const filtered = n > 0 ? Array.from({length: n}, (_, i) => i).filter(i => Math.floor(i) === i && i % 2 !== 0).length : 0;
//   return filtered;
// }

function oddCount(n) {
    if (n === null || n === undefined || typeof n !== 'number') {
      return 0;
    }
  
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (i % 2 !== 0) {
        count++;
      }
    }
    return count;
  }

console.log(oddCount(15));
console.log(oddCount(15023));
console.log(oddCount());
