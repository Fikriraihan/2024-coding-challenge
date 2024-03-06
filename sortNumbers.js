const solution = (numbers) => (numbers !== null && numbers.length > 0 ? numbers.sort((x, y) => y - x) : []);

console.log(solution([1, 4, 2, 3, 10]));
console.log(solution(null));
