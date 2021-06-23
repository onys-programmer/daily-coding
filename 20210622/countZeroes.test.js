describe('countZeroes', () => {
  function countZeroes(arr, left = 0, right = arr.length) {
    if(arr.length === 0 || left === right) {
      console.log(`case1`);
      return 0;
    } else {
      let center = Math.floor((left + right)/2);
      console.log(`case2\n center became ${center}`);
      if(arr[center] === 0) {
        console.log(`case3\n arr[center]===0, right: ${right}, left: ${left}, arr: ${arr}, center: ${center}`);
        return right - center + countZeroes(arr, left, center);
      } else {
        console.log(`case4\n arr[center] !==0, arr: ${arr}, center + 1: ${center + 1}, right: ${right}`);
        return countZeroes(arr, center + 1, right);
      }
    }
  }

  function countZeroes2(arr) {
    let mid;
    let start = 0;
    let fin = arr.length;
    while (start < fin) {
      mid = Math.floor((start + fin)/2);
      if(arr[mid] === 1) {
        if(!arr[mid + 1]) return arr.length - mid - 1;
        else start = mid + 1;
      } else {
        if (arr[mid - 1] === 1) return arr.length - mid;
        else fin = mid;
      }
    }
    return arr.length;
  }

  it('returns the number of zeroes', () => {
    expect(countZeroes([1,1,1,0,1,0,0,1])).toBe(3);
  });
});
