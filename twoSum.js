var mergeTwoLists = function (list1, list2) {
  return [...list1, ...list2].sort((x, y) => x - y);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
