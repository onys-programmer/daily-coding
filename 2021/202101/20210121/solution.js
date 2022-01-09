function solution(answers) {
  var result = [];
  var pattern1 = [1, 2, 3, 4, 5];
  var pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var pattern3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var score1 = answers.filter((a,i)=> a === pattern1[i%pattern1.length]).length;
  var score2 = answers.filter((a,i)=> a === pattern2[i%pattern2.length]).length;
  var score3 = answers.filter((a,i)=> a === pattern3[i%pattern3.length]).length;
  var max = Math.max(score1, score2, score3);

  if (score1 === max) {result.push(1)};
  if (score2 === max) {result.push(2)};
  if (score3 === max) {result.push(3)};


  return result;
}

module.exports = solution;