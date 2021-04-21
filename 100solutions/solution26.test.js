// 서비스 반영 -> 진도 100%일때만
// 각 기능 개발 속도 달라 뒤 기능 개발이 먼저 끝날수도 있음
// 하지만 뒤 기능이 먼저 배포되지 않고 앞 기능 배포될 때 같이 배포
// progresses : 먼저 배포되어야하는 순서대로 작업 진도가 적힌 배열
// speeds : 개발 속도
// return : 각 배포마다 몇 개의 기능이 배포되는지
// 배포는 하루에 한 번만 가능, 하루의 끝에 됨.

test('기능 개발', () => {
  function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress)/speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i < days.length; i++) {
      if(days[i] <= maxDay) {
        answer[j] += 1;
      } else {
        maxDay = days[i];
        answer[++j] = 1;
      }
    }

    return answer;
  }

  expect(solution([93, 30, 55],[1, 30, 5])).toStrictEqual([2,1]);
});
