// // Coding Challenge 2024 18/366
// Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript
// 8 Kyu

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
