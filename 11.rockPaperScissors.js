// Coding Challenge 2024 11/366
// Rock Paper Scissors
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// 8 kyu

// const rps = (p1, p2) => {
//   if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
//   else if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
//   else if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
//   else if (p1 === p2) return "Draw!";
//   else return "Player 2 won!";
// };

// const rps = (p1, p2) => {
//   return p1 === p2 ? "Draw!" : (p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || (p1 === "scissors" && p2 === "paper") ? "Player 1 won!" : "Player 2 won!";
// };

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  //   return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
  return rules[p1] === p2;
};

console.log(rps("paper", "rock"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "scissors"));
console.log(rps("paper", "rock"));
