// Coding Challenge 2024 5/366
// DNA to RNA
// https://www.codewars.com/kata/5556282156230d0e5e000089
// 8 kyu

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     const element = dna[i];
//     if (element === "T") {
//       rna += "U";
//     } else {
//       rna += element;
//     }
//   }
//   return rna;
// }

// const DNAtoRNA = (dna) =>
//   dna
//     .split("")
//     .map((i) => (i === "T" ? "U" : i))
//     .join("");

// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
