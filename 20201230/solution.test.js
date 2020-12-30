test('solution', () => {

  const solution = require('./solution');

  const participant = [ 'a', 'b', 'c', 'd', 'd', 'retire', 'e' ]

  const completion = [ 'd', 'b', 'e', 'c', 'd', 'a' ];

  expect(solution(participant, completion)).toBe('retire');
})