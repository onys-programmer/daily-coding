describe('minSubArrayLen', () => {
  function minSubArrayLen(arr, target) {
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    let total = 0;

    while(start < arr.length) {
      if(total < target && end < arr.length) {
        total += arr[end];
        end++;
      } else if(total >= target) {
        minLen = Math.min(minLen, end - start);
        total -= arr[start];
        start++;
      } else if(end >= arr.length) break;
    }

    return minLen === Infinity ? 0 : minLen;
  }

  it("returns minSubArrayLen's sum", () => {
    expect(minSubArrayLen([2,3,1,2,4,3], 7)).toBe(2);
  });
});
