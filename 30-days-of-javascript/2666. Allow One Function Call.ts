type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let hasExecutated = false;  

    return function (...args) {
        if (hasExecutated) return undefined
      
        hasExecutated = true;
        return fn(...args);
    };
}