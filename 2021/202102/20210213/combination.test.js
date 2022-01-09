function n개짜리(length) {
  
}

function combination (cards) {
  const length = cards.length;
  const result = cards.length + 2;
  return result;
}

test('combination', () => {
  expect(combination([1,4])).toBe(4);
})