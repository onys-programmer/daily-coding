test('sort by age', () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [pete, john, mary];

  const sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
  };

  sortByAge(arr);

  expect(arr[0].name).toBe("John");
  expect(arr[1].name).toBe("Mary");
  expect(arr[2].name).toBe("Pete");
});
