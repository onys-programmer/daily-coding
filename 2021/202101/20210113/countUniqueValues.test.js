test('countUniqueValues',() => {
  const countUniqueValues = require('./countUniqueValues');

  const result = [1];
  expect(countUniqueValues()).toEqual(result);
});