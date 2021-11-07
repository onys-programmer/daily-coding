
function solution(array) {
  let maxNum = 0;

  maxNum = array.sort();

  return maxNum.toString();
};
//ascii -> toString -> 배열의 첫번째 원소 비교(아스키로)
//Max값을 내림차순 정렬
//10진법 더하기로

describe('solution', () => {
  describe('when array is [6, 10, 2]', () => {
    it('returns 6210', () => {
      const { maxNum } = solution([6,10,2]);
      expect(maxNum).toBe(6210);
    })
  });
  expect(solution([6, 10, 2])).toBe("6210");
  expect(solution([1, 9, 0])).toBe("910");
  expect(solution([1000, 0, 738])).toBe("73810000");
});