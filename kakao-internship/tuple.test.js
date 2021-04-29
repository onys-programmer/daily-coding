test('tuple', () => {
  const solution = (s) => {
    const tuple = [];
    const sets = [];

    // s를 배열로 바꾸기
    s = s.replace(/^{{/, '').replace(/}}$/, '');
    console.log(s);
    // "2},{2,1},{2,1,3},{2,1,3,4"

    s = s.split('},{');
    console.log(s);
    // ['2', '2,1', '2,1,3', '2,1,3,4']

    // 정렬
    s.sort((a,b) => {
      if(a.length >= b.length) {
        return 1;
      } else {
        return -1;
      }
    })
    console.log(s);

    // 스트링 요소들 숫자로 바꾸기
    s.map((i) => {
      let set = i.split(',');
      set = set.map((v => parseInt(v)));
      sets.push(set);
    });
    console.log(sets);
    // [[2],[2,1],[2,1,3],[2,1,3,4]]

    tuple.push(sets[0][0]);
    console.log(tuple);
    // tuple : [2]

    for(let i = 0; i < sets.length; i++) {
      // sets에서 tuple의 마지막 원소들 다 지우기
      sets.forEach((item) => {
        let idx = item.indexOf(tuple.slice().pop());
        item.splice(idx, 1);
      });
      console.log("sets:"+sets);

      if(tuple.length === sets.length) break;
      // 원소 하나인 sets요소를 tuple에 추가 
      tuple.push(sets[i+1][0]);

      console.log("tuple:"+tuple);
    }
    
    // sets: [[], [1], [1,3], [1,3,4]]

    
    // tuple : [2, 1]
    
    // if(s[0].length === 1) {
    //   tuple.push(s[0][0]);
    // }

    // if(s[1].length === 2) {
    //   let idx = s[1].indexOf(tuple[0]);
    //   console.log(s[1]);
    //   s[1].splice(idx, 1);
    //   tuple.push(s[1][0]);
    // }

    // 원소 1인 것에서 index0 추출
    // 원소 2인 것에서 index0 뺀것으로 index1 추출

    // console.log(tuple);
    return tuple;
  };

  expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toStrictEqual([2, 1, 3, 4]);
});

// 셀 수 있는 수량의 순서있는 열거 
// 어떤 순서를 따르는 요소들의 모음
// n튜플 - n개의 요소를 가진 튜플
// 원소의 순서가 다르면 다른 튜플
// 중복 원소 존재 가능
// n-튜플 s가 매개변수로 주어짐
// n-튜플 요소 하나 안의 원소 순서는 바껴도 상관없음
// 원소 개수 유한
