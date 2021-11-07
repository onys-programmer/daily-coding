// import pushToStack from './pushToStack.js';
// import popToResult from './popToResult.js';
import readline from "readline";

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
    console.log(`limit is initiated: ${limit}`);
  }
  
  if(count === limit) {
    rl.close();  
  }

})
  .on('close', function () {
    solution(input);
    process.exit();
  });

  export default function solution(input) {
    let arr = input;
    let counts = arr.shift();

    let targets = arr;
    let resource = arr.sort((a, b) => a - b);
    let stack = [];
    let result = [];

    for(let i = 0; i < counts; i++) {
      let target = targets[i];

      if(stack[stack.length-1] !== target) {
        if(stack.some((e) => e === target)) {
          answer = "NO";
          break;
        } else {
          pushToStack(target, resource, stack);
          popToResult(target, stack, result);
        }
      } else {
        popToResult(target, stack, result);
      }
    }
    console.log(answer);
  }

  function popToResult (target, stack, result) {
    if(target === stack[stack.length-1]) {
      result.push(stack.pop());
      answer += "-\n";
    } else return;
  }

  function pushToStack (target, resource, stack) {
    if(resource.some((e) => e === target)) {
      while(stack[stack.length - 1] !== target) {
        stack.push(resource.shift());
        answer += "+\n";
      }
    } else return;
  }  
