const array = [6, 10, 2];

function solution(array) {

  let sortedArrray = array.sort().reverse();

  let stringArray = [];

  for(let i = 0; i < sortedArrray.length; i++) {
    stringArray[i] = sortedArrray[i].toString();
  }
  
  return sortedArrray.join("");
}

describe('solution', () => {
  describe('when array is [6, 10, 2]', () => {
    it('returns 6210', () => {
      const maxNum = solution([6,10,2]);
      expect(maxNum).toBe("6210");
    })
  });
  expect(solution([6, 10, 2])).toBe("6210");
  expect(solution([1, 9, 0])).toBe("910");
  expect(solution([3, 30, 34, 5, 9])).toBe("9534330");
});
