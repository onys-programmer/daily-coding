test('solution', () => {
  const array = [1, 5, 2, 6, 3, 7, 4];
  const k = 3;
  expect(array[k-1]).toBe(2);

  const solution = require('./solution');

  expect(solution(array, commands)).toBe(answer);
});