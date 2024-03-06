// function filter_list(l) {
//   return l.filter((i) => typeof i === "number");
// }

const filter_list = (l) => l.filter((i) => typeof i === "number");

console.log(filter_list([1, "2", 3, "-a"]));
