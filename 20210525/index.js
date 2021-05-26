const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', function(line) {
  input = line;
  rl.close();
})
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const xInput = input.replace(/\(\)/g, "x");
  console.log(xInput);
  
  const answer = 'answer';

  console.log(answer);
}


// 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다
// 자기보다 긴 막대기 위에만 놓일 수 있다.
// 끝점은 겹치지 않도록 놓는다
// 각 쇠막대기를 자르는 레이저는 적어도 하나 존재
// 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않음

// 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로
// () 레이저
// ()(((()())(())()))(())
// x(((xx)(x)x))(x)
// 331 31 22 11 => 17

// 변수
// beingCut
// left

// input = ()(((()())(())()))(())
// xInput = x(((xx)(x)x))(x)

// xCounter = 0;
// 