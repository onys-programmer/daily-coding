const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let limit = 100000;

let input = [];
let answer = '';

rl.on('line', function(line) {
  input.push(+line);
  count++;
  if(input.length === 1) {
    limit = input[0]+1;
  }
  
  if(count === limit) {
    rl.close();  
  }

})
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  input.shift();
  
  let rsc = input.slice().sort((a, b) => a - b);
  let stack = [];
  let result = [];

  for(let i = 0; i < input.length; i++) {
    let target = input[i];

    while(target !== stack[stack.length-1]) {
      if(!rsc.some((e) => e === target)) break;

      stack.push(rsc.shift());
      answer += "+\n";
    }

    if(target !== stack[stack.length-1] && stack.some((e) => e === target)) {
      answer = "NO";
      break;
    }

    if(target === stack[stack.length-1]) {
      result.push(stack.pop());
      answer += "-\n";
    }
  }

  console.log(answer);
}

// while(stack 마지막게 target일 때) stack에 추가 
// stack에 추가될때마다 +
// stack에서 빠질때마다 -
// stack에서 빠져야 하는데 마지막게 아닐 때 NO
// stack에서 빠졌는데 target이 아닐 때 NO