test('', () => {
  let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
  ];

  const groupById = (arr) => {
    return arr.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    } , {});
  };

  let usersById = groupById(users);

  expect(usersById).toStrictEqual({
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  });
});
