describe('isPalindrome', () => {
  function isPalindrome(str) {
    const reverse = (str) => {
      if(str.length <= 1) return str;
      return reverse(str.slice(1)) + str[0];
    };

    let result = reverse(str);

    return result === str ? true : false;
  }

  it('check whether the string is palindrome', () => {
    expect(isPalindrome('tacocat')).toBe(true);
    expect(isPalindrome('awesome')).toBe(false);
  });
});
