const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, L] = input.shift().split(" ").map(Number);
const nums = Object.entries(input[0].split(" ").map(Number)).map(v => v.map(Number));
const deq = [];
// console.log(nums);
for (let i = 0; i <= N - L; i++) {
  if (i === 0) { // 최초 덱 초기화
    for (let j = 0; j < i + L; j++) {
      deq.push(nums[j]);
      process.stdout.write(j != 0 ? '1 ' : '');
    }
    process.stdout.write(`${Math.min(...deq.map(v => v[1])).toString()} `);
    continue;
  }
  if (deq.length && deq[0][0] < i) { // 덱 맨 처음 요소 idx가 윈도우를 벗어난다면 제거
    deq.shift();
  }
  let cnt = 0;
  while (deq.length) { // deq이 없어지면 그만

    if (deq[0][1] > nums[i + L - 1][1]) { // 덱 처음 요소값이 현재 추가될 값보다 크다면
      // console.log('커요 빠지세요');
      deq.shift();
      // console.log(`deq: ${deq}`);
    } else {
      break;
    }
    cnt++;
    if (cnt >= 2) break;
  }
  deq.push(nums[i + L - 1]); // 큰거 다 빠진 후 추가되기
  // console.log(deq);
  process.stdout.write(i !== N - L ? `${deq[0][1].toString()} ` : deq[0][1].toString());
}
// for (let i = 0; i < L - 1; i++) {
//   Ds.unshift(1);
// }
