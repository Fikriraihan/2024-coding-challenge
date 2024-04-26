var createCounter = function (init) {
  let count = init;
  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  function reset() {
    let count = init;
    return count;
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};

const counter = createCounter(5);

counter.increment();

console.log(createCounter());
