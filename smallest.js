// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallest = args[0];
//     for (let i = 0; i < args.length; i++) {
//       if (args[i] < smallest) {
//         smallest = args[i];
//       }
//     }
//     return smallest;
//   }
// }
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
