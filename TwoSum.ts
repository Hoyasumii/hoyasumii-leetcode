export function twoSum(nums: number[], target: number): number[] | undefined {
  for (let firstIndex: number = 0; firstIndex < nums.length; firstIndex++) {
    for (
      let lastIndex: number = nums.length - 1;
      lastIndex > firstIndex;
      lastIndex--
    ) {
      if (nums[firstIndex] + nums[lastIndex] === target) {
        return [firstIndex, lastIndex];
      }
    }
  }
}
