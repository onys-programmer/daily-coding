test('', () => {
  function solution(left, right) {
    let array = [];
    for(let i = left; i <= right; i++) {
      array.push(i);
    }
    // 연속적 배열 만들기

    function yaksoo (digit) {
      let count = 0;
      for(let i = 1; i <= digit; i++) {
        if(digit % i === 0) count++;
      }
      return count;
    }
    //yaksoo 구현

    return array.reduce((acc, cur) => yaksoo(cur) % 2 === 0 ? 
    acc + cur : 
    acc - cur, 0);
    // 검사. 약수 개수 짝수 or 홀수
    // 홀수면 뺀다.
    // 짝수면 더한다.
  }

  expect(solution(13, 17)).toBe(43);
});
