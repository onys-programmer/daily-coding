test('validAnagram', () => {

  const validAnagram = require('./validAnagram');

  expect(validAnagram('','')).toBe(true);
  expect(validAnagram('aaz','zza')).toBe(false);
  expect(validAnagram('rat','car')).toBe(false);
  expect(validAnagram('awesome','awesom')).toBe(false);
  expect(validAnagram('qwerty','qeywrt')).toBe(true);
  expect(validAnagram('texttwisttime','timetwisttext')).toBe(true);
  expect(validAnagram('abcd','abcc')).toBe(false);
});