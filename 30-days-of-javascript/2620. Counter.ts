export function createCounter(n: number): () => number {
  let value = n - 1;

  return function() {
      return value += 1;
  }
}
