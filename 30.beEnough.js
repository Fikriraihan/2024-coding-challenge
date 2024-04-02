// Coding Challenge 2024 30/366
// Will there be enough?
// https://www.codewars.com/kata/5875b200d520904a04000003
// 8 Kyu

function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : on + wait - cap;
  //   return Math.max(wait + on - cap, 0);
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
console.log(enough(75, 70, 46));
