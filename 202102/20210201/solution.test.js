function solution(citations) {
  let n = 0;
  while (citations.filter(i => i >= n).length >= n ? true : false) {
    n++;
  }

  return n-1;
}

test('solution', () => {
  expect(solution([3, 0, 6, 1, 5])).toBe(3);
})
