// var createCounter = function (n) {
//   return function (arr) {
//     return n++;
//   };
// };

// class Counter {
//   constructor(n) {
//     this.n = n;
//   }

//   increment() {
//     return ++this.n;
//   }
// }

const counter = Counter(10);
counter.increment();
counter();

console.log(counter());
