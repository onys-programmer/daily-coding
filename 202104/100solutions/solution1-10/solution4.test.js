test('', () => {
  let arr = ["HTML", "JavaScript", "CSS"];

  const copySorted = () => {
    return arr.slice().sort();
  };

  let sorted = copySorted(arr);

  expect(sorted).toStrictEqual(["CSS", "HTML", "JavaScript"]);
  expect(arr).toStrictEqual(["HTML", "JavaScript", "CSS"]);
});
