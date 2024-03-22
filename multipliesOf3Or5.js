function solution(number) {
  if (number > 0) {
    const map = [
      ...Array(number)
        .fill()
        .map((_, i) => i),
    ];
    const filter = map.filter((x) => x % 3 === 0 || x % 5 === 0);
    return filter.reduce((x, sum) => x + sum, 0);
  }
  return 0;
}

console.log(solution(10));
console.log(solution(-1));
