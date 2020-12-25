test('solution', () => {
  const solution = require('./solution.js');
  const participant = ['태호', '서영', '아샬'];
  const completion = ['태호', '아샬'];
  const { completionIndex, notCompleted } = solution(participant, completion);

  expect(notCompleted).toBe('서영');
  expect(completionIndex).not.toBeNull();

});