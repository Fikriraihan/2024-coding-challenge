var romanToInt = function (s) {
  const splittedS = s.split("");
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (const key in roman) {
    if (Object.hasOwnProperty.call(roman, key)) {
      for (let i = 0; i < splittedS.length; i++) {
        if (splittedS[i] === key) {
          total += roman[key];
        }
      }
    }
  }
  return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
