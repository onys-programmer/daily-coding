test('solution', () => {

  const solution = require('./solution');

  const person1 = [];
  for(let i =0; i < 10000; i += 5 ) {
    person1[i] = 1;
    person1[i+1] = 2;
    person1[i+2] = 3;
    person1[i+3] = 4;
    person1[i+4] = 5;
  }
  
  expect(person1.length).toBe(10000);
  expect(solution([1,2,3,4,5])).toStrictEqual([1]);
});