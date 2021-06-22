describe('reverse', () => {
  function reverse(str) {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }

  function myReverse(str) {
    let reversedStr = [];
    let arr = str.split("");

    for(let i = 0; i < str.length; i++) {
      reversedStr.push(arr.pop());
    }

    return reversedStr.join("");
  }

  it('reverses string', () => {
    expect(reverse('awesome')).toBe('emosewa');    
  });
});
