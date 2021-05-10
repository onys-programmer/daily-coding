test('printer', () => {
  function solution(priorities, location) {
    let arr = priorities.map((priority, index) => (
      { index: index, priority: priority }
    ));

    let queue = [];

    while (arr.length > 0) {
      let firstEle = arr.shift();
      let hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
      if (hasHighPriority) {
        arr.push(firstEle);
      } else {
        queue.push(firstEle);
      }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
  }

  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
