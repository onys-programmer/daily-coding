function solution(clothes) {
	return Object.values(clothes.reduce((obj, t)=> {
		obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
    return obj; } , {})).reduce((a,b)=> a*(b+1), 1)-1; 
  }


test('solution', () => {

  const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
  
  expect(solution(clothes)).toBe(5);
});
