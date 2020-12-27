test('solution', () => {
  const solution = require('./solution');
  const participant = ['태호', '서영', '아샬']
  const completion = ['태호', '아샬']
  expect(solution(participant, completion)).toBe('서영'); 
});