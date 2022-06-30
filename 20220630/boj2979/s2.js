let input = require('fs').readFileSync('input.txt')
  .toString().trim().split("\n").map(v => v.split(' ').map(Number));

const parkingLot = new Array(101).fill(0);
const fees = input.shift();

input.forEach(([_in, _out]) => {
  for (let i = _in; i < _out; i++) {
    parkingLot[i]++;
  }
});

let answer = 0;
for (let j = 1; j <= 100; j++) {
  if (parkingLot[j]) {
    if (parkingLot[j] === 1) answer += fees[0]
    else if (parkingLot[j] === 2) answer += fees[1] * 2
    else if (parkingLot[j] === 3) answer += fees[2] * 3;
  }
}

console.log(answer);
