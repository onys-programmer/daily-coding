describe('maxSubarraySum', () => {
  function maxSubarraySum(arr, num) {
    if(arr.length < num) return null;

    let total = 0;
    for(let i = 0; i < num; i++) {
      total += arr[i];
    }

    let currentTotal = total;
    
    for(let i = num; i < arr.length; i++) {
      currentTotal += arr[i] - arr[i - num];
      total = Math.max(currentTotal, total);
    }

    return total;

  }

  function myMaxSubarraySum(array, num) {
    let temp = 0;
    let max = -Infinity;

    if(num > array.length) return null;

    for(let i = 0; i < array.length; i++) {
      temp = array.slice(i, i + num).reduce((acc, cur) => acc + cur, 0);
      if (temp > max) max = temp;
    }
    
    return max;
  }

  it("returns maxSubarray's sum", () => {
    expect(maxSubarraySum([100, 200, 300, 400, -100], 2)).toBe(700);
  });
});
