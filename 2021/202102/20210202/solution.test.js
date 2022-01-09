function solution(clothes) {
  //TODO : 원소 개수가 1인거 -> 2인거 -> 3인거 순으로

  const kindOfClothes = ["headgear", "eyewear"];
  return answer;
}

test('solution', () => {

  const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
  
  expect(solution(kindOfClothes)).toBe(["headgear", "eyewear"]);
  solution(clothes).toBe(5);
});
