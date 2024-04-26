// function noSpace(x) {
//   return x.match(/[a-zA-Z0-9]/g).join("");
// }
function noSpace(x) {
  return x.replaceAll(" ", "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
