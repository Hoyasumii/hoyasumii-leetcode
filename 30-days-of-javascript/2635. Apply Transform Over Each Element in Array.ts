function map(
  data: number[],
  action: (value: number, index: number) => number
): number[] {
  return Array.from(data, action);
}
