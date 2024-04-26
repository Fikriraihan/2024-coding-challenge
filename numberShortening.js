function shortenNumber(suffixes, base) {
  return function (val) {
    if (val.length <= 3) {
      return val + suffixes[0];
    } else if (val.length >= 4 && val.length < 7) {
      const result = val / Math.pow(base, suffixes.length - 2);

      return Math.floor(result) + suffixes[1];
    } else if (val.length >= 7 && val.length <= 10) {
      const result = val / Math.pow(base, suffixes.length - 1);

      return Math.floor(result) + suffixes[2];
    } else {
      const result = val / Math.pow(base, suffixes.length - 1);

      return result + suffixes[3];
    }
  };
}

const filter1 = shortenNumber(["", "kb", "m"], 1000);
const filter2 = shortenNumber(["B", "KB", "MB", "GB"], 1024);

console.log(filter1("234324"));
console.log(filter1("1000"));
console.log(filter1("2100"));
console.log(filter1("1000000"));
console.log(filter1("1000"));
console.log(filter2("10000001000000"));
console.log(filter1("98234324"));
console.log(filter1("32424234223"));
