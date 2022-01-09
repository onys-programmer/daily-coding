import validAnagram from './validAnagram';

test('validAnagram', () => {

  const compared = "abc";
  const comparing = "bac";

  const { arrCompared, arrComparing } = validAnagram(compared, comparing);

  expect(arrCompared).toBe([ "a", "b", "c" ]);
  expect(arrComparing).toBe([ "b", "a", "c" ]);

  expect(validAnagram('','')).toBe(true);
  expect(validAnagram('aaz','zza')).toBe(false);
  expect(validAnagram('rat','car')).toBe(false);
  expect(validAnagram('awesome','awesom')).toBe(false);
  expect(validAnagram('qwerty','qeywrt')).toBe(true);
  expect(validAnagram('texttwisttime','timetwisttext')).toBe(true);
});