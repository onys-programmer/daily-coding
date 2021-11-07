describe('countUniqueValues', () => {
  function countUniqueValues(arr) {
    let mySet = new Set();
    arr.forEach(e => mySet.add(e));
    let count = mySet.size;
    return count;
  }
  it('counts how many unique values are', () => {
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([1,1,1,1,1,2])).toBe(2);
    expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4);
  });
});
