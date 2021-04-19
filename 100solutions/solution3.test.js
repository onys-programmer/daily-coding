test('', () => {
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
  
  expect(arr).toStrictEqual([8, 5, 2, 1, -10]);
});