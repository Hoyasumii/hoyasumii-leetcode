class ArrayWrapper {
  data: number[];

  constructor(nums: number[]) {
    this.data = nums;
  }

  valueOf(): number {
    return this.data.reduce((prev, curr) => prev + curr, 0);
  }

  toString(): string {
    return `[${this.data.join(",")}]`;
  }
}
