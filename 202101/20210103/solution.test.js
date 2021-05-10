test('solution', () => {

  const solution = require('./solution');

  const participant = ['a', 'b', 'c', 'd', 'd', 'retirer', 'e'];
  const completion = ['d', 'c', 'a', 'e', 'd', 'b'];

  const { hash } = solution(participant, completion);

  expect(hash[participant[0]]).toBe(1);
  expect(solution(participant, completion)).toBe('retirer');
  }); 