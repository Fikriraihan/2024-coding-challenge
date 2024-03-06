const sumEvenNumbers = input => input.filter((i) => i % 2 === 0).reduce((acc, curr) => acc + curr, 0);


console.log(sumEvenNumbers([0, 1, 3, 4, 5, 6, 10]));
