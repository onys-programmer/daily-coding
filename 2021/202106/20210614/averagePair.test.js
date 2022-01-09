describe('averagePair', () => {
  function averagePair(arr, target) {
    for(let i = 0; i < arr.length; i++) {
      let num1 = i;
      let rest = target * 2 - num1;
      if(arr.some(e => e === rest)) return true;
    }

    return false;
  }

  it('checks if there is a pair that is same with target average', () => {
    expect(averagePair([], 4)).toBe(false);
    expect(averagePair([1,2,3], 2.5)).toBe(true);
    expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toBe(true);
    expect(averagePair([-1,0,3,4,5,6], 4.1)).toBe(false);
  });
});
