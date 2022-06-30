const input = require('fs').readFileSync('input.txt').toString().trim().split("\n");
input.shift();

const fstLtrs = input.map(v => v[0]);
fstLtrs.sort();

const table = fstLtrs.reduce((acc, cur) => {
  if (!acc[cur]) acc[cur] = 1;
  else acc[cur]++;
  return acc;
}, {});

const ret = Object.entries(table).filter(([k, v]) => v >= 5).map(v => v[0]).join("");
console.log(ret ? ret : 'PREDAJA');
