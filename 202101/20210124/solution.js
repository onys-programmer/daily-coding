function solution(answers) {
  const bestScorers = [];

  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [2, 1, 2, 3, 2, 4, 2, 5];
  const patterns = [pattern1, pattern2, pattern3];

  const scores = [];

  patterns.forEach((pattern) => {
    scores.push(answers.filter((a, i) => a === pattern[i % pattern.length]).length);
  })

  const bestScore = Math.max(scores[0], scores[1], scores[2]);

  let map = new Map(); //{key:score, value:index}

  for (let i = 0; i < scores.length; i++) {
    if (bestScore == scores[i]) {
      map.set(bestScore, i + 1);
    }
  }

  for (let value of map.values()) {
    bestScorers.push(value);
  }

  return bestScorers;
}

module.exports = solution;