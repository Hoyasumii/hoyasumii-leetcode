type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
  const initialValue = init;

  return {
    increment() {
      return init += 1;
    },
    decrement() {
      return init -= 1;
    },
    reset() {
      init = initialValue;
      return init;
    }
  }  
};
