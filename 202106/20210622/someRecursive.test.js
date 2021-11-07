describe('someRecursive', () => {
  function isOdd(val) {
    return val % 2 !== 0;
  }

  function someRecursive(arr, callBack) {
    if(arr.length === 0) return false;
    if(callBack(arr[0])) return true; 

    return someRecursive(arr.slice(1), callBack);
  }

  function mySomeRecursive(arr, callBack) {
    for(let i = 0; i < arr.length; i++) {
      if(callBack(arr[i])) return true;
    }

    return false;
  }

  it('checks if there is an element that returns true when put in a callback', () => {
    expect(someRecursive([2,4,6,8], isOdd)).toBe(false);
    expect(someRecursive([2,4,6,9], isOdd)).toBe(true);
  });
});
