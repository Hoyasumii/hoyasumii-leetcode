type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const chunkedArray: Obj[][] = [];
  let currentIndex = -1;

  for (let index = 0; index < arr.length; index++) {
    if (index % size === 0) {
      chunkedArray.push([]);
      currentIndex++;
    }
    chunkedArray[currentIndex].push(arr[index]);
  }

  return chunkedArray;
}
