describe('isSubsequence', () => {
  function isSubsequence(arg1, arg2) {
    let str1 = arguments[0];
    let str2 = arguments[1];
    let result = [];

    let strArr1 = str1.split("");
    let strArr2 = str2.split("");
    console.log(strArr1);
  
    for(let i = 0; i < str2.length; i++) {
      if(strArr2.some(e => e === str1[i])) {
        
        console.log(strArr1);

        let obj = {};
        obj[str1[i]] = i;
        result.push(obj);
      }
    }
    console.log(result);

    return true;
  }

  it('checks whether a string is  a subsequence of other string', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
  }); 
});
