const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let limit = 1000000;
let result = "";
let input = [];

const solution = (input) => {
  let dp = [0, 0, 2, 4, 7];

  for(let i = 5; i <= 1000000; i++) {
    dp.push((dp[i-1] + dp[i-2] + dp[i-3]));
  }

  for(let j = 1; j < input.length; j++) {
    let n = input[j];
    if(j === input.length - 1) {
      result += +dp[n] % 1000000009;
      break;
    }
    result += +dp[n] % 1000000009 + "\n";
  }

  console.log(result);
};

// 점화식
// 정수 1을 1, 2, 3 의 합으로 나타내는 방법
// 1 => 0 0개 + 자기자신 1 // 1
// 2 => 1+1, 1개 + 자기자신 1 // 2
// 3 => 1+1+1, 1+2, 2+1 3개 + 자기자신 1 => 4
// 4 => 1+1+1+1, 1+1+2, 1+2+1, 1+3, 2+1+1, 2+2, 3+1 => 7
// 5 => dp[4] + dp[3] + dp[2]
// n => dp[1]+dp[n-1], ... , dp[n-1]+dp[1];

rl.on('line', function (line) {
  input.push(+line);
  count++;
  if(input.length === 1) {
    limit = input[0]+1;
  }
  if(count >= limit) {
    rl.close();
  }
})
.on("close", function () {
  solution(input);
  process.exit();
});
