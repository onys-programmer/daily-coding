function solution(clothes) {
  let numberOfKinds = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;},{});
  return Object.values(numberOfKinds).reduce((acc, cur) => acc * (cur+1), 1)-1;
}

test('solution', () => {
  expect(
    solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])
    ).toBe(5);
});
