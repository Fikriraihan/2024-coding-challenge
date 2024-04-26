// function disemvowel(str) {
//   const regex = /[^aiueo]/gi;
//   return str.match(regex).join('');
// }
const disemvowel = (str) => str.replace(/[aiueo]/gi, "");

console.log(disemvowel("This website is for losers LOL!"));
