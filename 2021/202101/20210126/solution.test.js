test('solution', () => {

  const solution = require('./solution');

 

  expect(solution("Hello World!")).toStrictEqual(2);

  expect(solution(" Hello World!")).toStrictEqual(2);
  expect(solution(" ")).toStrictEqual(0);
  expect(solution("   ")).toStrictEqual(0);
  expect(solution("I am Ironman")).toStrictEqual(3);
  expect(solution("I'll be back")).toStrictEqual(3);
  expect(solution("Would you like something to drink?")).toStrictEqual(6);
  expect(solution("I just wonder if you could hang out with me tommorow night")).toStrictEqual(12);
});