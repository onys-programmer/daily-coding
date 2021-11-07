test('solution', () => {
  const solution = require('./solution');

  const participant = ['나무늘보', '거북이', '달팽이', '느림보', '토끼'];

  const completion = ['거북이', '느림보', '토끼', '나무늘보'];

  expect(solution(participant, completion)).toBe('달팽이');
});