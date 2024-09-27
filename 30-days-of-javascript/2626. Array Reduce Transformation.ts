type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let counter = init;

  nums.forEach(item => {
    counter = fn(counter, item);
  })

  return counter;   
};