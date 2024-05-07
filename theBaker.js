// function cakes(recipe, available) {
//   let arr = [];
//   for (const key in recipe) {
//     if (Object.hasOwnProperty.call(recipe, key)) {
//       arr.push(Math.floor(available[key] / recipe[key] || 0));
//     }
//   }
//   return +arr.sort().slice(0, 1).join();
// }

function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));
