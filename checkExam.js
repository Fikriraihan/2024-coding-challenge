function checkExam(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === "" || array2[i] === "") {
      count = count + 0;
    } else if (array1[i] === array2[i]) {
      count = count + 4;
    } else {
      count = count - 1;
    }
  }
  return count < 0 ? 0 : count;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
