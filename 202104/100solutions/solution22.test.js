test('', () => {
  function solution(answers) {
    const winner = [];

    const scores = [0, 0, 0];

    const patterns = [
      [1, 2, 3, 4, 5], 
      [2, 1, 2, 3, 2, 4, 2, 5], 
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    patterns.map((ptn, idx) => {
      for (let i of answers) {
        if(ptn[i % ptn.length] == answers[i]) scores[idx]++;
      }
    });

    winner.push(scores.indexOf(Math.max(...scores)) + 1);

    return winner;
  }

  expect(solution([1, 2, 3, 4, 5])).toStrictEqual([1]);
});
