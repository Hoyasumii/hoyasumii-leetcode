type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  let cache: Record<string, number> = {};

  return function (...args) {
    const key = `${fn.name}:${args.join(":")}`

    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(...args);

    return cache[key];
  };
}
