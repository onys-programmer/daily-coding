describe('isPalindrome', () => {
  function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1]; 

    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

    return false;
  }

  function myIsPalindrome(str) {
    const reverse = (str) => {
      if(str.length <= 1) return str;
      return reverse(str.slice(1)) + str[0];
    };

    return reverse(str) === str ? true : false;
  }

  it('check whether the string is palindrome', () => {
    expect(isPalindrome('tacocat')).toBe(true);
    expect(isPalindrome('awesome')).toBe(false);
    expect(myIsPalindrome('tacocat')).toBe(true);
    expect(myIsPalindrome('awesome')).toBe(false);
  });
});
