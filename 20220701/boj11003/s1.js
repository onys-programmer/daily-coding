const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, L] = input.shift().split(" ");
const nums = input[0].split(" ").map(Number);

const Ds = [];
const window = [];

for (let end = 0; end < N; end++) {
  let start = end - L + 1;
  if (start < 0) {
    Ds.push(1);
    continue;
  };
  if (start === 0) {
    for (let i = start; i <= end; i++) {
      window.push(nums[i]);
    }
    Ds.push(Math.min(...window));
  } else {
    window.shift();
    window.push(nums[end]);
    Ds.push(Math.min(...window));
  }
}

console.log(...Ds);
