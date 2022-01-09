function solution(clothes) {
  //TODO : Map 만들기
  //각각의 key가 몇개의 value를 가지고 있는지
  //key: kindOfClothes value: countOfClothes

let answer = 1;

  const myMap = new Map();

  for(let i = 0; i < clothes.length; i++) {
    const kindOfClothes = clothes[i][1];

    if(!kindOfClothes) {
      myMap.set(kindOfClothes, 1);
    } else {
      myMap.set(kindOfClothes, myMap.get(kindOfClothes) + 1)
    }
  }

  for(let i = 0; i < myMap.keys().length; i++) {
    answer *= (myMap.get(myMap.keys()[i])+1);
  }

  console.log(myMap);
  return answer - 1;
}

test('solution', () => {

  const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
  
  expect(solution(clothes)).toBe(5);
});
