type FilterFunction = (value: number, index: number) => boolean

function filter(data: number[], action: FilterFunction): number[] {
    const filteredArray: number[] = [];

    data.forEach((item, index) => {
      if (action(item, index)) {
        filteredArray.push(item);
      }
    })

    return filteredArray;
};