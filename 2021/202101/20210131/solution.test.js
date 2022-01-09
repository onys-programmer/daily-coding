function solution(array) {

  const sortedArray = array.sort((a, b) => `${b}${a}`-`${a}${b}`);
  
  const answer = sortedArray.join("").toString();
        
  return answer[0]==='0'?'0':answer;
  }
  
test('solution', () => {
  expect(solution([6, 10, 2])).toBe("6210");
  expect(solution([1, 9, 0])).toBe("910");
  expect(solution([3, 30, 34, 9, 5])).toBe("9534330");
})