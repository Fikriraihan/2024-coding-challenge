// Coding Challenge 2024 26/366
// Update Lights
// https://www.codewars.com/kata/58649884a1659ed6cb000072
// 8 Kyu

// function updateLight(current) {
//   return current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
// }

const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
