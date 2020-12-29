test('solution', () => {
  const solution = require('./solution');

  const participant = ['a', 'a', 'b', 'b', 'flash', 'snail', 'slow', 'retire'];

  const completion = ['flash', 'a', 'slow', 'b', 'a', 'b', 'snail']

  expect(solution(participant, completion)).toBe('retire');
});