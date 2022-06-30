const input = require('fs').readFileSync("input.txt")
  .toString().trim().split('\n').map(v => v.split(' ').map(Number));

let pLot = new Array(101).fill(0);
const fees = input.shift();

input.forEach(v => {
  const [start, end] = v;
  for (let x = start; x < end; x++) {
    pLot[x]++;
  }
})

console.log(fees.reduce((acc, fee, idx) => {
  const ret = pLot.filter(x => x === idx + 1).length * fee * (idx + 1);
  return acc + ret;
}, 0));
