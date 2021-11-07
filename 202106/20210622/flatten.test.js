describe('flatten', () => {
  function flatten(arr) {
    var newArr = [];

    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        newArr = newArr.concat(flatten(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }
    
    return newArr;
  }

  it('removes []', () => {
    expect(flatten([1,2,3,[4,5]])).toStrictEqual([1,2,3,4,5]);
  });
});
