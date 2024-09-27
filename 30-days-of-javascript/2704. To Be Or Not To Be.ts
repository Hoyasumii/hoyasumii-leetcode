type ToBeOrNotToBe<T> = {
  toBe: (val: T | undefined | null) => boolean;
  notToBe: (val: T | undefined | null) => boolean;
};

function expect<T>(target: T): ToBeOrNotToBe<T> {
  return {
    toBe(val) {
      const equal = target === val;

      if (!equal) throw new Error("Not Equal");

      return equal;
    },
    notToBe(val) {
      const notEqual = target !== val;

      if (!notEqual) throw new Error("Equal");

      return notEqual;
    }
  };
}
