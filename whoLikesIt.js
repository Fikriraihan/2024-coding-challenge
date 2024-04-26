// function likes(names) {
//   const twoPerson = names.slice(0, 2).join(`${names.length === 2 ? " and " : ", "}`);
//   const thirdPerson = names.slice(2, 3);
//   const moreThanTwo = names.slice(2).length;
// //   return names.length === 0
// //     ? "no one like this"
// //     : names.length === 1
// //     ? `${names} like this`
// //     : names.length === 2
// //     ? `${twoPerson} like this`
// //     : names.length === 3
// //     ? `${twoPerson} and ${thirdPerson} like this`
// //     : `${twoPerson} and ${moreThanTwo} others like this`;

//
// }

function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " likes this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " likes this";
      break;
    default:
      return names[0] + ", " + names[1] + ", " + "and " + (names.length - 2) + " others likes this";
  }
}

// function likes(names) {
//   return {
//     0: "no one likes this",
//     1: `${names[0]} like this`,
//     2: `${names[0]} and ${names[1]} like this`,
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4: `${names[0]}, ${names[2]} and ${names.length - 2} others like this`,
//   }[Math.min(4, names.length)];
// }

console.log(likes(["f", "f", "f", "f", "f"]));
