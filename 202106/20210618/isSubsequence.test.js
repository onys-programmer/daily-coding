describe('isSubsequence', () => {
function isSubsequence(pattern, text) {
  let i = 0;
  for(let j = 0; j < text.length; j++) {
    if(pattern[i] !== text[j]) {
      console.log(`i=${i}, j=${j}, pattern[i] : ${pattern[i]}, text[j] = ${text[j]}, continue`);
      continue;
    } else if(pattern[i] === text[j]) {
      console.log(`i=${i}, j=${j} pattern[i] : ${pattern[i]}, text[j] = ${text[j]}, i++`);
      i++;
    }
  }
  return i === pattern.length;
}

  it('checks whether str1 is a subsequence of str2', () => {
    // expect(isSubsequence('hello', 'hello world')).toBe(true);
    // expect(isSubsequence('', '')).toBe(true);
    // expect(isSubsequence('sing', 'sting')).toBe(true);
    expect(isSubsequence('abc', 'rcabacadabra')).toBe(true);
    // expect(isSubsequence('abc', 'acb')).toBe(false);
    // expect(isSubsequence('ffj', 'acb')).toBe(false);
  });
});

// 문제 이해를 잘 해야 함. 미꾸라지처럼 빠져나가서 쉬운 알고리즘 형태를 만들어보자.