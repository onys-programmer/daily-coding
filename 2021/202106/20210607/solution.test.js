test('', () => {
  function solution(w, h) {
    let answer = 0;
    return answer;
  }

  // 2,2 => 2개 없어짐, 깔끔하게 반토막

  // 2,3 => 4개 없어짐, 날일자 두개로 없어짐

  // 

  expect(solution(1,1)).toBe(0);
  expect(solution(1,2)).toBe(0);
  expect(solution(2,2)).toBe(2);

});
