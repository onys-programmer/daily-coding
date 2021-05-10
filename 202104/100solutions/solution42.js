let rods = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

function cutRod(rods, n) {
let R = [0];

for(let i = 1; i <= n; i++) {
    let temp = 0;
    for(let j = 1; j <= i; j++) {
      temp = Math.max(temp, rods[j] + R[i-j]);  
    }
    R[i] = temp;
  }


return R[n];
}

console.log(cutRod(rods, 2));
console.log(cutRod(rods, 3));
console.log(cutRod(rods, 4));
console.log(cutRod(rods, 7));

// i = 1
// temp = 0;
// j -> 1
// temp = max(temp, rods[j] + R[i-j]);
// temp = max(0, rods[1]+R[0]);
// temp === 1;
// R[1] === 1;

// i = 2
// j -> 2
// temp = max(1, rods[1] + R[1]); // 2
// temp = max(2, rods[2] + R[0]); // 5
// temp === 5;
// R[2] === 5;

// i = 3
// j -> 3
// temp = max(5, rods[1] + R[2]); // 6
// temp = max(6, rods[2] + R[1]); // 6
// temp = max(6, rods[3] + R[0]); // 8
// temp === 8;
// R[3] === 8;

// i = 4
// j -> 4
// temp = max(8, rods[1] + R[3]); // 9
// temp = max(9, rods[2] + R[2]); // 10
// temp = max(10, rods[3] + R[1]); // 10
// temp = max(10, rods[4] + R[0]); // 10
// temp === 10;
// R[4] === 10;

// i = 5
// j -> 5
// temp = max(10, rods[1] + R[4]); // 11
// temp = max(11, rods[2] + R[3]); // 13
// temp = max(13, rods[3] + R[2]); // 13
// temp = max(13, rods[4] + R[1]); // 13
// temp = max(13, rods[5] + R[0]); // 13
// temp === 13;
// R[5] === 13;
function rodCut(rods, n) {
  let R = [0];
  for(let j = 1; j <= n; j++) {
    let temp = 0;
      for(let i = 1; i <= j; i++) {
        temp = Math.max(temp, rods[i] + R[j-i]);
      }
    R[j] = temp;
  }
  return R[n];
}

console.log(rodCut(rods, 2));
console.log(rodCut(rods, 3));
console.log(rodCut(rods, 4));
console.log(rodCut(rods, 7));