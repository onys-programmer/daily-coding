const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, L] = input[0].split(" ").map(Number);
const deq = [];
for (let i = 0; i < N * 2 - 1; i += 2) {
  const n = input[1][i];
  if (!deq.length && deq[0][1] < i - L) { // index 벗어나는 놈
    deq.shift();
  }

  while (!deq.length && deq[deq.length - 1][1] < n) {
    deq.pop();
  }
  deq.push([i, n]);
  console.log(deq);
};
