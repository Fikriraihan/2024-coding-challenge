function joinArraysById(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    for (const key in arr1[i]) {
      if (Object.hasOwnProperty.call(arr1[i], key)) {
        for (let j = 0; j < arr2.length; j++) {
          for (const key2 in arr2[j]) {
            if (Object.hasOwnProperty.call(arr2[j], key2)) {
              if (key === key2) {
                obj = Object.assign(arr2[j]);
              }
            }
          }
        }
      }
    }
  }
  console.log(obj);
}

// const arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];
// const arr2 = [
//   { id: 3, y: 2 },
//   { id: 4, z: 3 },
// ];

const arr1 = [
  { id: 2, x: 9 },
  { id: 1, x: 1 },
];
const arr2 = [
  { id: 2, y: 2 },
  { id: 3, z: 3 },
];

const output = [
  { id: 1, x: 1 },
  { id: 2, x: 9, y: 2 },
  { id: 3, z: 3 },
];

// const output = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
//   { id: 3, y: 2 },
//   { id: 4, z: 3 },
// ];

console.log(joinArraysById(arr1, arr2));
