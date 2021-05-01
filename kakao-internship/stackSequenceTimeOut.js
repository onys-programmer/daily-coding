// 1~ n 까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
// 이때 push 하는 순서는 반드시 오름차순을 지킨다.
// 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지, 없는지
// 있자면 어떤 순서로 push와 pop 연산을 수행해야 하는지 알아내라

// let limit = +(require("fs").readFileSync("/dev/stdin").toString());

// let inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

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
  process.exit();
});

// rl.on('line', function (line) {
  // if (count >= limit) {
  //   rl.close();
  // }
// })
//   .on("close", function () {
//     process.exit();
//   });


// targets = [];
// stack = [];
// target = inp[0] // 1
// rsc = [1,2,3,4,5]
// rsc에서 shift되어 스택에 푸시될 때마다 "+"
// target이 stack 안에 있을 때 $$ target이 stack.slice().pop일 때
// stack에서 pop 한 것을 targets에 푸쉬 될 때마다 "-"

// stack에 target이 들어갈 때까지 push();
// stack.pop()이 타겟이라면 pop;
// pop()해도 target이 아니라면 No
// target이 push되면 target을 inp[1]로 바꾸고 반복

      // console.log("+ excuted");

      // console.log(`targets: ${targets}
      // stack : ${stack}
      // rsc : ${rsc}`);


      // console.log("- excuted");
    // console.log(`targets: ${targets}
    // stack : ${stack}
    // rsc : ${rsc}`);
