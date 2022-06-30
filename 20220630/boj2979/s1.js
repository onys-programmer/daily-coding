let input = require('fs').readFileSync('input.txt')
  .toString().split('\n')
  .map(str => str.replace(/\r/g, ""))
  .map(str => str.split(" "));

const parkingLot = new Array(101).fill(0);
const fees = input.shift().map((ele, idx) => ele * (idx + 1));
input.forEach(([_in, _out]) => {
  for (let i = _in; i < _out; i++) {
    parkingLot[i]++;
  }
});

console.log(fees.reduce((acc, cur, idx, src) => {
  const fee = parkingLot.filter(x => x === idx + 1).length * cur;
  return acc + fee;
}, 0));
