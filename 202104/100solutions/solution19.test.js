test('', () => {
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for(let item of arr) {
      if (partialSum < 0) partialSum = 0;

      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum);
    }
    return maxSum;
  }
  
  expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
  expect(getMaxSubSum([-1, 2, 3, -1])).toBe(5);
  expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
  expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
  expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
  expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
  expect(getMaxSubSum([1, 2, 3])).toBe(6);

  expect(getMaxSubSum([-1, -2, -3])).toBe(0);
});
