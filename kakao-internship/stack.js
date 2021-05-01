const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let stack = [];
let count = 0;
let limit = 10000;

rl.on('line', function (line) {
  let newLine = line.split(' ');
  if (newLine[0] === "push") {
    stack.push(newLine[1]);
    console.log(stack[stack.length-1]);
    count++;
  } else if (newLine[0] === "pop") {
    console.log(stack.length === 0 ? "-1" : stack.pop());
    count++;
  } else if (newLine[0] === "size") {
    console.log(stack.length + "\n");
    count++;
  } else if (newLine[0] === "empty") {
    console.log(stack.length === 0 ? "1" : 0);
    count++;
  } else if (newLine[0] === "top") {
    console.log(stack.length === 0 ? "-1" : stack[0]);
    count++;
  } else if (Number.isInteger(+newLine[0])) {
    limit = newLine[0];
  }

  if(count >= limit) {
    rl.close();
  }
})
  .on("close", function () {
    process.exit();
  });

// let inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// let stack = [];
// let result = "";
// for (let i = 1; i < inp.length; i++) {
//   let arr = inp[i].split(" ");
//   let len = stack.length;
//   if (arr[0] == "push") stack.push(arr[1]);
//   else if (arr[0] == "pop") result += (len == 0 ? -1 : stack.pop()) + "\n";
//   else if (arr[0] == "size") result += len + "\n";
//   else if (arr[0] == "empty") result += (len == 0 ? 1 : 0) + "\n";
//   else if (arr[0] == "top") result += (len == 0 ? -1 : stack[len - 1]) + "\n";
// }
// console.log(result);