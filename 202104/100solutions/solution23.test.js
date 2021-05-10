test('', () => {
  function power(num, exponent) {
    if(exponent <= 0) return 1;
    return num * power(num, exponent-1);
  }

  expect(power(2,0)).toBe(1);
  expect(power(2,2)).toBe(4);
  expect(power(2,4)).toBe(16);
});
