const readline = require("readline");
const { getHeapCodeStatistics } = require("v8");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let limit = 100000;

let input = [];

rl.on('line', function(line) {
  input.push(line);
  count++;
  
  if(count === 2) {
    rl.close();  
  }

})
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const [ N, S ] = input[0].split(" ");
  const As = input[1].split(" ");
  let gaps= [];

  As.push(S);
  As.sort((a, b) => a - b);

  for(let i =0; i < N; i++) {
    gaps.push(As[i+1] - As[i]);
  }

  console.log(gaps);

  let answer = 'answer';

  return answer;
}

// 동생 N명 
// 수빈 점 S 
// 동생은 A1, A2, ... , An
// 위치가 X일 때 걷는다면 1초 후에 X+D나 X-D로 이동 
// 위치가 같으면 동생을 찾는다.
// 모든 동생을 찾기 위해 D의 값을 정하려고 한다.
// D의 최댓값
// 점 10^9 동생 10^5
// 동생의 위치는 모두 달라, 수빈의 위치와 같지 않아.
// D값
