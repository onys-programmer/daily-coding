const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

const solution = (input) => {
  let dp = [0, 1, 2];

  for(let i = 3; i <= input[0]; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[input[0]] % 10007);
};

rl.on('line', function (line) {
  input.push(+line);

  if(input.length >= 1) {
    rl.close();
  }
})
.on("close", function () {
  solution(input);
  process.exit();
});

// 2xn 크기의 직사각형을 1x2, 2x1 타일
// 2x1 크기 => 1
// 2x2 => 2
// 2x3 => 3
// 2x4 => 5
// 2x5 => 8
// dp[n] = dp[n-1]+dp[n-2];