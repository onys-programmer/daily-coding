test('solution', () => {

  const solution = require('./solution');

  const participant = ['a', 'b', 'c', 'd', 'd', 'retire', 'e'];

  const completion = ['d', 'c', 'a', 'e', 'd', 'b']

// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
  for(i=0; i<participant.length; i++) {
    expect(participant[i].length).toBeGreaterThanOrEqual(1);
    expect(participant[i].length).toBeLessThanOrEqual(20);
  };

// completion의 길이는 participant의 길이보다 1 작습니다.
  expect(participant.length-1).toBe(completion.length);

  expect(solution(participant, completion)).toBe('retire')
});

// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.