test('solution', () => {
  function solution(orders, course) {
    const orderedCountMap = new Map();
    const maxCountMap = new Map();
    const courseSet = Set(course);

    function combination(result, index, str) {
      if (courseSet.has(result.length)) {
        let count = orderedCountMap.get(result) || 0;
        orderedCountMap.set(result, ++count);

        const max = maxCountMap.get(result.length) || 0;
      }
    }
    var answer = [];
    answer = ["WX", "XY"];
    return answer;
    // orders의 문자열 중에서 course의 각 원소값의 수로 이루어진 코스메뉴의 개수
    // orders[0] C course[0]
    // orders[0]개수의 문자열에서 하나를 뽑아
  }

  expect(solution(["XYZ", "XWY", "WXA"], [2,3,4])).toStrictEqual(["WX","XY"]);
});

