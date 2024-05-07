//return the total number of smiling faces in the array
function countSmileys(arr) {
  count = 0;
  const regex = /;/g;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i].match(regex)) {
      console.log(arr[i]);
      count += 1;
    }
  }
  return count;
}

// console.log("bsd".match(/a|b[s]/));

console.log(countSmileys([":D", ":~)", ";~D", ":)", ":D"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([":D", ":->", ":-)", ";D"]));
