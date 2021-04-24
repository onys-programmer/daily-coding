test('', () => {
  function solution(n, prices) {
    prices.unshift(0);
    let R = [0];

    for(let j = 1; j <= n; j++) {
      let temp = 0;
      for(let i = 1; i <= j; i++) {
        temp = Math.max(temp, prices[i] + R[j-i]);
      }
      R[j] = temp;
      console.log(R[j]);
    }
    
    return R[n];
  }
  expect(solution(4, [1,5,6,7])).toBe(10);
});

// 최대 구매 금액
// 4개일때
// (4개짜리 카드 금액 + 0개 최대 금액)
// 4개일때 최대구매금액 : max(P4+R0, P3+R1, P2+R2, P1+R3);
// n개일때 최대구매금액 : d[n] = max(Pi+Rn-i), 1<=i<=n;

// temp = 0;
// R0 = 0;
// i = 1
// j -> 1
// temp = max(temp, P1+R0); = 1 
// temp === 1
// R[1] === 1

// i = 2
// j -> 2
// temp = max(temp, P1+R1); 2
// temp = max(temp, P2+R0); 5
// temp === 5;
// R[2] === 5;

// i = 3
// j -> 3
// temp = max(temp, P1+R2); 6
// temp = max(temp, P2+R1); 6
// temp = max(temp, P3+R0); 6
// temp === 6
// R[3] === 6


// temp에 순회할 때마다의 최대값 저장하기
// 순회 마지막에 최대값을 R[n]에 할당하기


let solution = (input) => {
  const n = +input[0];

};
