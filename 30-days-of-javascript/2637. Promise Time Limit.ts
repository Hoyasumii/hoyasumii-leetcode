type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return await Promise.race([
      fn(...args),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      }),
    ]);
  };
}
