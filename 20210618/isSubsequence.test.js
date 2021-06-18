describe('isSubsequence', () => {
  function isSubsequence(str1, str2) {
    if (str1 === str2) return true;
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let temp = [];
    
    // s1 t2 r3 ...으로 객체 배열 만들기
    let objArr = [];

    for(let i = 0; i < str2.length; i++) {
      let obj = {};
      obj[str2[i]] = i;
      objArr.push(obj);
    }
    console.log(objArr);

    // sing을 하나씩 순회
    // s가 string에 있으면 s를 빼서 push
    for(let i = 0; i < str1.length; i++) {
      if(arr2.some(e => e === str1[i])) {
        // s가 property인 객체를 objArr에서 찾아 빼고, temp에 넣기
        let obj;
        for(let i = 0; i < objArr.length; i++) {
          if(objArr[i].name === i) {
            obj = objArr[i];
          }
          console.log(obj);
        }

        objArr.splice()

      }
    }

    console.log(temp);
    return false;
  }

  // sing, string이면
  // s1 t2 r3 ...으로 객체 만들기
  // sing을 하나씩 순회
  // s가 string에 있으면 s를 빼서 push
  // tring
  // i가 tring에 있으면
  // i 빼
  // n이 trng에 있으면 n 빼서 Push
  // g가 trg에 있으면 g 빼서 push

  // 없으면 false return

  // 결과 배열을 검사
  // 다음거 value가 현재 value보다 크면 true return, 아니면 false

  it('checks whether str1 is a subsequence of str2', () => {
    expect(isSubsequence('', '')).toBe(true);
    expect(isSubsequence('sing', 'string')).toBe(true);
  });
});
