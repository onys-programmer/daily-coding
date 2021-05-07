const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = "";
let input = [];

const solution = (input) => {
  let n = input[0];
  let p = input[1].split(" ").map((v) => +v);
  let d = new Array(1001).fill(0);

  p.unshift(0);

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
      d[i] = Math.max(d[i], p[j]+d[i-j]);
    }
  }

  console.log(d[n]);
};

rl.on('line', function (line) {
  input.push(line);

  if (input.length >= 2) {
    rl.close();
  }
})
  .on("close", function () {
    solution(input);
    process.exit();
  });

// 4장 1 5 6 7 
// 1장 산다면 1
// 2장 산다면 Max(11, 2) 5
// 3장 산다면 Max(111 12 3) 6
// 4장 산다면 Max(1111, 112, 22, 13, 4) 10
// 5장 산다면 Max(11111, 14, 113, 1112, 122, 23)
// 4장 산다면 Max(P1+3장 사는거 Max, P2+2장사는거 Max, P3+ 1장 사는거 Max 4장짜리 1개)
// n장 산다면 Max(P1+Dn-1, P2+Dn-2, P3+Dn-3, ,Pn-1+D1, Pn);

// d[1] = p[1];
// d[2] = Math.max(p[1]+d[1], p[2]);
// d[3] = Math.max(p[1]+d[2], p[2]+d[1], p[3]);
// d[4] = Math.max(p[1]+d[3], p[2]+d[2], p[3]+d[1], p[4]+d[0]);
