const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let limit = 100000;

let input = [];

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

function solution() {
  const answer = 'answer';

  return answer;
}
