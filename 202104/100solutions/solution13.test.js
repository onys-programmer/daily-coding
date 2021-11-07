test('', () => {
  function isEmpty(obj) {
    for (let key in obj) {
      return true;
    }
    return false;
  }

  let schedule = {};
  expect(isEmpty(schedule)).toBeTruthy; // true

  schedule["8:30"] = "get up";
  expect(isEmpty(schedule)).toBeFalsy; // false
});
