type Fn<T> = () => Promise<T>;

async function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    let data: T[] = new Array(functions.length);
    let completed = 0;

    functions.forEach((fn, index) => {
      fn().then(
        (result) => {
          data[index] = result;
          completed++;
          if (completed === functions.length) {
            resolve(data);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}
