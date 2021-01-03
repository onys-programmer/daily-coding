describe('database', () => {
  const participant = require('./database');

  const completion = require('./database');

  it('참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다', () => {
    for(i=0; i<participant.length; i++) {
      expect(participant[0].length).toBeGreaterThanOrEqual(1);
      expect(participant[0].length).toBeLessThanOrEqual(20);
    };
  });

  it('completion의 길이는 participant의 길이보다 1 작습니다', () => {
    expect(participant.length-1 === completion.length);
  });

  it('마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다', () => {
    expect(participant.length).toBeGreaterThanOrEqual(1);
    expect(participant.length).toBeLessThanOrEqual(100000);
  });
});
