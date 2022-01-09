// 인접 번호에게만 빌려줄수있음
// 최대한 많은 학생이 체육수업 듣기

// int n = 전체 학생의 수
// arr lost = 도난당한 번호
// arr reserve = 여벌 보유 번호
// return = 체육수업 들을 수 있는 학생 최대값
test('체육복', () => {
  function solution(n, lost, reserve) {
    let temp = reserve.slice();
    // reserve 배열을 temp에 복사

    for (let i in temp) {
      let key = lost.indexOf(temp[i])
      // 원래 reserve[i]값을 가진다면 인덱스 몇? = 을 key에 할당
      // 키는 여벌옷 가지고 도난당한 사람의 lost index
      
      // 그런 사람이 있을 때 실행
      if(key != -1) {
        lost.splice(key, 1);
        // lost에서 도난당한 사람을 지움
        reserve.splice(reserve.indexOf(temp[i]), 1);
        // reserve에서도 도난당한 사람 지움
      }

      // 여벌옷 가지고 도난당한 사람 없으면 아무것도 안함
    }

    for (let i of reserve) {
      // reserve 하나하나 요소를 i에 할당하며 순회
      let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1)
      // reserve의 앞사람이 lost냐? 그러면 그사람 index를, 아니면 reserve 뒷사람 index를 key로
      
      // 어찌됐건 reserve 앞뒤 사람 중에 도난당한 사람이 있는 경우에 실행
      if (key != -1) {
        lost.splice(key, 1)
      }
      
      // 앞뒤에게 빌려줄 수 없으면 아무것도 안함
    }

    return n - lost.length;
  }

  expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
  expect(solution(5, [2, 4], [2])).toBe(4);
  expect(solution(5, [2, 4], [3])).toBe(4);
  expect(solution(3, [3], [1])).toBe(2);
});
