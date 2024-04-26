var expect = function (val) {
  return {
    notToBe: (v) => {
      if (v !== val) return true;
      else throw new Error("Not Equal");
    },
    toBe: (v) => {
      if (v === val) return true;
      else throw new Error("Not Equal");
    },
  };
};

const p = expect(5);

console.log(expect(5).notToBe(1));
console.log(expect(o).notToBe(o));
