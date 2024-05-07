let fighters = ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"];
let moves = ["up", "left", "right", "left", "left"];
let initialPosition = [0, 0];
function streetFighterSelection(fighters, position, moves) {
  let arr = [];
  let tempHero = fighters[0];
  for (let i = 0; i < fighters.length; i++) {
    for (let j = 0; j < moves.length; j++) {
      if (moves[j] === "up") {
        arr.push(fighters[0]);
        tempHero = fighters[0];
        if (condition) {
        }
      }
    }
  }
  return arr;
}

console.log(streetFighterSelection(fighters, initialPosition, moves));
