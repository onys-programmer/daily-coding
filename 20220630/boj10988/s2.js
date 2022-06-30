const input = require('fs').readFileSync('input.txt').toString().trim();
let flag = true;

for (let i = 0; i < input.length / 2; i++) {
  if (input[i] === input[input.length - i - 1]) {
    continue;
  }
  console.log(0);
  flag = false;
  break;
}

if (flag) console.log(1);
