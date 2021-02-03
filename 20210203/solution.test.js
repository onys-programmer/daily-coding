function solution(clothes) {
  //TODO : Map 만들기
  //각각의 key가 몇개의 value를 가지고 있는지
  //key: kindOfClothes value: countOfClothes


  const myMap = new Map();

  const key = ;
  const value = ;

  myMap.set(key, value);
  const kindOfClothes = ["headgear", "eyewear"];
  
  return answer;
}

test('solution', () => {

  const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
  
  expect(solution(clothes)).toBe(5);
});
