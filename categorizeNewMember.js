function openOrSenior(args) {
  return args.map((i) => (i[0] >= 55 && i[1] > 7 ? "Senior" : "Open"));
}

// console.log(openOrSenior([45, 12]));
// console.log(openOrSenior([55, 21]));
// console.log(openOrSenior([45, 12], [55, 21], [19, -2], [104, 20]));
// console.log(openOrSenior([3, 12], [55, 1], [91, -2], [53, 23]));
// console.log(openOrSenior([59, 12], [55, -1], [12, -2], [12, 12]));
console.log(
  openOrSenior([
    [79, 6],
    [17, 0],
    [53, 10],
    [74, 19],
    [63, 7],
    [46, 15],
  ])
);
