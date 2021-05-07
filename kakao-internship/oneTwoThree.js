const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let limit = 10000;
let result = "";
let input = [];

const solution = (input) => {
  let dp = [0, 1, 2, 4];

  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for(let i = 1; i < input.length; i++) {
    let num = input[i];
    result += dp[num] + "\n";
  }

  console.log(result);
};

rl.on('line', function (line) {
  input.push(+line);
  count++;
  if (input.length === 1) {
    limit = input[0] + 1;
  }

  if (count >= limit) {
    rl.close();
  }
})
  .on("close", function () {
    solution(input);
    process.exit();
  });

// 1 => 1
// 2 => 2
// 3 => 4
// 4 => 7
// 5 => 11111 2111(4) 221(3) 311(3) 32 23 // 13
// 6 => dp[5]+dp[4]+dp[3] 
// dp[n] => dp[n-1]+dp[n-2]+dp[n-3]