test('dart game', () => {
  function solution(dartResult) {
    const powers = {'S': 1, 'D': 2, 'T': 3};
    let darts = dartResult.match(/\d[SDT][*#]?/g);
    console.log("darts:"+darts);
    
    for(let i = 0; i < darts.length; i++) {
      let split = darts[i].match(/(\d{1,2})([SDT])([*#])?/);

      score = Math.pow(split[1], powers[split[2]]);

      if(split[3] !== undefined) {
        if(split[3] === '*') {
          score *= 2;
          if(i > 0) darts[i - 1] *= 2;
        } else score *= -1;
      }

      darts[i] = score;
      console.log("darts[i]:"+darts[i]);
    }

    return darts.reduce((a,b) => a + b, 0);
  }
  expect(solution("1S2D*3T")).toBe(37);
});

console.log('1S'*2);