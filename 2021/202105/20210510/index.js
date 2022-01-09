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
const { Z_PARTIAL_FLUSH } = require("zlib");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let limit = 100000;
let count = 0;
let inp = [];

rl.on('line', function (line) {
  inp.push(+line);
  count++;

  if (inp.length === 1) {
    limit = inp[0] + 1;
  }

  if (count >= limit) {
    rl.close();
  }
})
  .on('close', function () {
    solution(inp);
    process.exit();
  });

const solution = (input) => {
  input.shift();

  let result = "";
  let targets = [];
  let stack = [];
  let rsc = range(1, input.length);

  for (let i = 0; i < input.length; i++) {
    let target = input[i];

  // stack에 target이 들어올때까지 plus 실행

  if(!stack.some((e) => e === target)) {
    while (stack.some((e) => e === target)) {
      result = plus(target, stack, rsc, result);
    }
  } else {
    if(stack[stack.length-1] === target) {
      result = minus(target, stack, result);
    } else {
      result = "NO";
    }
  }
}

  console.log(result);
}

function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; ++i) {
    arr.push(i);
  }
  return arr;
}

const plus = (target, stack, rsc, result) => {
  while(!rsc.some((e) => e === target)) {
    if(stack.some((e) => e === target)) {
      break;
    }

    stack.push(rsc.shift());
    result += "+" + "\n";
  }

  return result;
}

const minus = (target, stack, result) => {
  if (stack[stack.length - 1] === target) {
    targets.push(stack.pop());
    result += "-" + "\n";
    target = input[i + 1];
  } else {
    result = "NO";
  }

  return result;
}

// 43687521

// stack에 target이 들어올때까지 plus 실행
// stack에 target이 있고 마지막거라면 minus 실행
// stack에 target이 있는데 마지막게 아니라면 NO 한 후 break;

// target: 4
// stack : 1 - 12 - 123 - 1234
// src에 없고 stack마지막게 target이므로 - 실행  
// targets: 4
// target: 3

// src에 target 없고 stack 마지막게 target이므로 - 실행
// targets: 4,3
// target: 6

// src에 target 있으니 + 실행 src에 target 없어질 때까지
// stack: 1256

// src에 없고 stack 마지막게 target이므로 - 실행
// stack: 125
// targets: 436
// target: 8
