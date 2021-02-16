//2. 숫자카드가 모여있을 때 조합해서 나올 수 있는 모든 수 반환하는 함수
//숫자카드가 10개 모여있다. 이 때 숫자카드를 조합하여 6자리 숫자를 만드는 경우의 수를 구하시오.
//숫자카드가 n개 모여있다. 이 때 숫자카드를 조합하여 m자리 숫자를 만드는 경우의 수를 구하시오.

function permutation(cards) {

  return onePiece + twoPieces.length;
}

test('permutation', () => {

  expect(permutation([1,4])).toBe(4);

  expect(permutation([1,2,3])).toBe(15);
});
//3C2 = 3*2/2*1
//3C2 [1,2,3] 12 23 13 21 32 31
//인자 2개 받기