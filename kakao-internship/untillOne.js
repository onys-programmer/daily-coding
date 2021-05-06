const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = "";
let input = [];

const solution = (input) => {
  input = input[0].split(" ");

  let count = 0;
  let n = input[0];
  let k = input[1];

  while (n !== 1) {
    if(n % k === 0) {
      n = n/k;
      count++;
    } else { 
      n = n - 1;      
      count++;
    }
  }
  
  console.log(count);
};

rl.on('line', function (line) {
  input.push(line);

  if(input.length >= 1) {
    rl.close();
  }
})
.on("close", function () {
  solution(input);
  process.exit();
});

// 1을 빼기
// k로 나누기
// 나눌 수 있으면 나누고, 없으면 1 빼고