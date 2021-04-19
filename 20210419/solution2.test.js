test('solution2', () => {
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  const aclean = (arr) => {
    // return Array.from(new Set(arr.map(str => str.sort(Array.from(str)))));
    const sortedArray = ["nap", "teachers", "ear"];
    let mySet = new Set(sortedArray);

    return Array.from(mySet);
  };

  expect( aclean.sortedArray ).toBe(["nap", "teachers", "ear"]);
  // 함수 안에 있는 지역변수를 테스트할 수 있는 방법엔 무엇이 있을까?
  expect( aclean(arr) ).toStrictEqual(["nap", "teachers", "ear"]);
});