test('', () => {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;

  for(let key in salaries) {
    sum += salaries[key];
  }

  expect(sum).toBe(390);
});
