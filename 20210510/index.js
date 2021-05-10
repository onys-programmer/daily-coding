// 1부터 n 까지 수를 스택에 넣었다가 뽑아 늘어놓음
// push하는 순서는 반드시 오름차순
// 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지
// 있다면 어떤 순설고 push와 pop 연산을 해야하는지 알아내는 프로그램 작성해라.
// 8
// 43687521
// ++++1234 넣고 -- ++56 넣고 - ++78넣고 -- - --
// 12534
// +1 넣고 - +2넣고 - +++345 넣고 - 3이 resource에 없어 no로 재할당

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let limit = 100000;
let count = 0;
let inp = [];

rl.on('line', function (line) {
  if(inp.length === 0) {
    limit = line;
  }
  inp.push(line);
  count++;
  if (count > limit) {
    rl.close();
  }
})
.on('close', function () {
  solution(inp);
  process.exit();
});

const solution = (inp) => {
  inp.shift();
  
  let input = inp.slice(); // 43687521
  let result = "";
  
  let targets = [];
  let stack = [];
  let rsc = inp.sort((a, b) => a - b);
  
  for (let i = 0; i < input.length; i++) {
    let target = input[i];
  
    while (!stack.some((elem) => elem === target)) {
      stack.push(rsc.shift());
      result += "+" + "\n";
    }
  
    if (stack[stack.length - 1] === target) {
      targets.push(stack.pop());
      target = input[i + 1];
      result += "-" + "\n";
    } else {
      result = "NO";
      break;
    }
  }

  console.log(result);
}