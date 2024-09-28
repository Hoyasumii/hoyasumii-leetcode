function twoSum(nums: number[], target: number): number[] | undefined {
  let mappedNumbers: Map<number, number> = new Map();

  for (let index: number = 0; index < nums.length; index++) {
    const value = target - nums[index];

    if (mappedNumbers.has(value)) {
      return [mappedNumbers.get(value) || 0, index];
    } else {
      mappedNumbers.set(nums[index], index);
    }
  }
}
