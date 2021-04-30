const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
.on('close', function() {
  console.log(input);
  process.exit();
});

  const stack = [];
  
  for(let i = 0; i < input.length; i++) {
    let v = input[i];
    if(v.some("push")) {
      let arr = v.split(" ");
      stack.push(arr[1]);
    } else if(v === "pop") {
      console.log(stack.length === 0 ? "-1" : stack.unshift());
    } else if(v === "size") {
      console.log(stack.length);
    } else if(v === "empty") {
      console.log(stack.length === 0 ? "1" : 0);
    } else if(v === "top") {
      console.log(stack[0])
    }
  }
