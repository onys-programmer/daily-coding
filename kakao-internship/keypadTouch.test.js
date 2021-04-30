test('keypad touch', () => {
  const solution = (numbers, hand) => {
    let answer = "";
    let mainHand = hand === "right" ? "R" : "L";

    let LLocation = [];
    let RLocation = [];
    
    for(let i = 0; i < numbers.length; i++) {
      let v = numbers[i]
      if(v === 1 || v === 4 || v === 7) {
        answer += "L";
        L
      } else if(v === 3 || v === 6 || v === 9) {
        answer += "R";
      } else if(v === 2 || v === 5 || v === 8 || v === 0) {
        if(RDistance > LDistance) {
          answer += "L";
        } else if(RDistance < Ldistance) {
          answer += "R";
        } else {
          answer.push(mainHand);
        }
      }
    }

    return answer;
  };

  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toBe("LRLLLRLLRRL");
});

// 상하좌우 4가지 방향으로만 이동할 수 있음. 키패드 이동 한 칸은 거리로 1에 해당
// 왼쪽 열의 3개의 숫자 1,4,7을 입력할 때는 왼손 엄지
// 오른쪽 열 3개의 숫자 3,6,9 입력할 때는 오른손 엄지 사용
// 2580은 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 두 엄지 손가락의 거리가 같다면, 오른손잡이는 오른손, 왼손잡이는 왼손 엄지

//