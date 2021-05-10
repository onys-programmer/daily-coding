//2. 숫자카드가 모여있을 때 조합해서 나올 수 있는 모든 수 반환하는 함수
//모든 n개짜리 값을 더해 반환하는 함수 accumulator => 완료
//n개짜리 값을 각각 구하는 함수 n개짜리 => 
 
function combination(cards) {
  function recursion(n){
    let sum = 1;
    if (n == 0) {
      return sum;
    }
    else if(n > 0) {
      sum *= (cards.length -(n-1));
      return recursion(n-1);
    }
    
    //2 = > cards.length * cards.length-1
  }

  function n개짜리(n) {
    if(n == 1) {
     return recursion(1);
    }
    if(n == 2) {
      return recursion(2);
    } 
    if(n == 3) {
      return recursion(3);
    }
    if(n == 100) {
      return recursion(100);
    }
    else {
      return null;
    }
  }

  function accumulator(n) {
    let sumArray = [];
    for(let i = 1; i <= n; i++) {
      sumArray.push(n개짜리(i));
    }
    const sum = sumArray.reduce((acc,cur) => acc + cur, 0)

    return sum;
  }

  return accumulator(cards.length);
}

test('combination', () => {
  expect(combination([1,4])).toBe(4);
  // expect(combination([0,4])).toBe(3);
  expect(combination([1,4,6])).toBe(15);
  //1,4,6,14,41,46,64,16,61,146,164,416,461,614,641
});