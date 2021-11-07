test('', () => {
  function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
  }

  expect(productOfArray([1,2,3])).toBe(6);
  expect(productOfArray([1,2,3,10])).toBe(60);
});
