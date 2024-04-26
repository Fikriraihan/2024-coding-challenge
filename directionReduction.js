function dirReduc(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") || (arr[i] === "EAST" && arr[i + 1] === "WEST") || (arr[i] === "WEST" && arr[i + 1] === "EAST")) {
      result.push("");
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
