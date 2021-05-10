test('', () => {
  let arr = [5, 3, 8, 1];

  const filterRange = (arr, a, b) => 
    arr.filter(item => (a <= item && item <= b ));

  expect(filterRange(arr, 1, 4)).toStrictEqual([3, 1]);
  expect(arr).toStrictEqual([5, 3, 8, 1]);
});
