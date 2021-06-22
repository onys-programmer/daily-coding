describe('reverse', () => {
  function reverse(str) {
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
