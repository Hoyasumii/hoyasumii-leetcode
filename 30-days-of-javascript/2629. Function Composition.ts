type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    for (let index = functions.length - 1; index >= 0; index--) {
      x = functions[index](x);
    }

    return x;
  };
}
