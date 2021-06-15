describe('isSubsequence', () => {
  function isSubsequence(args) {
    let string1 = arguments[0];
    let string2 = arguments[1];
    return false;
  }

  it('checks whether the characters in the first string from a subsequence of the characters in the second string', () => {
    expect(isSubsequence()).toBe(false);
    expect(isSubsequence('hello', 'hello world')).toBe(true);

  });
});
