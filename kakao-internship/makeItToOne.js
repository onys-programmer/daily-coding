// 정수 x에 사용할 수 있는 연산은 다음과 같이 세가지 이다.
// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 2를 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세개를 적절히 사용해서 1을 만들려고 한다.
// 연산을 사용하는 횟수의 최솟값을 출력하시오

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (num) => {
  // 1부터 3까지의 값을 미리 넣어준다.
  // 편의를 위해 인덱스는 1부터 시작한다.
  let dp = [0, 0, 1, 1];

  for (let i = 4; i <= num; i++) {
    // -1을 뺄 때, 2로 나눌 때, 3으로 나눌 때의 값을 비교해 최소값을 알아냄
    // -1을 했을 때
    dp[i] = dp[i - 1] + 1;
    
    // 3으로 나누어 떨어지는 수일 때
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);

    // 2로 나누어 떨어지는 수일 때
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  console.log(dp[num]);
};

rl.on('line', function (line) {
  solution(+line);
  rl.close();
})
.on("close", function () {
  process.exit();
});
