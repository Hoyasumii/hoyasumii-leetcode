export function createHelloWorld() {
  return function (...args: Array<unknown>): string {
    return "Hello World";
  };
}
