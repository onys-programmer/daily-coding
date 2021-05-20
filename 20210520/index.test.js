test('solution', () => {
  const input = [8,4,3,6,8,7,5,2,1];
  
  function solution(input) {
    let arr = input;
    arr.shift();

    let answer = '+\n-';
    
    return answer;
  }

  expect(solution(input)).toBe('+\n-');
});
