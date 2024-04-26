function solve(arr) {
  const indexed = arr.map((val, i) => ({
    i,
    value: val,
  }));
  const reversed = indexed.sort((x, y) => y.i - x.i);
  return reversed.map((i) => i.value);
}

console.log(solve(["Begin on 3rd Blvd", "Right on First Road", "Left on 9th Dr"]));
