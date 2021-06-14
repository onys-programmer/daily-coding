describe('areThereDuplicates', () => {
  function areThereDuplicates(args) {
    let arr = [...arguments];
    let mySet = new Set();
    arr.forEach(e => mySet.add(e));
    if(mySet.size !== arr.length) return true;

    return false;
  }

  it('checks if there are duplicates', () => {
    expect(areThereDuplicates(1,2,3)).toBe(false);
    expect(areThereDuplicates(1,2,2)).toBe(true);
  });
});
