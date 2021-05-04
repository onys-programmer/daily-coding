const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let limit = 500000;
let count = 0;

const solution = (arr) => {
  let str = arr[0].split("");
  let cursor = str.length;

  arr.map((cmd, i) => {
    if (i >= 2) {
      switch (cmd) {
        case "L":
          if (cursor > 0) {
            cursor--;
          }
          break;
        case "D":
          if (cursor < str.length) {
            cursor++;
          }
          break;
        case "B":
          if (cursor > 0) {
            str.splice(cursor, 1);
            cursor--;
          }
          break;
        default:
          let commandP = cmd.split(" ");
          str.splice(cursor, 0, commandP[1]);
          cursor++;
      }
    }
  });
  console.log(str.join(""));
};

rl.on('line', function (line) {
  input.push(line);
  if (input.length === 2) {
    limit = +input[1] + 2;
  };
  count++;
  if (count >= limit) {
    rl.close();
  }
})
  .on("close", function () {
    solution(input);
    process.exit();
  });

// 영어 소문자만 기록 가능
// L, D, B, P $
// 처음 커서는 문장 맨 뒤

// abcd
// 3
// P x // abcdx
// L abcd|x
// P y // abcdyx

// 첫 줄을 string에 저장
// 두번째 줄을 limit에 저장
// 커서를 string.length로 할당 // 4
// P x => string.splice(cursor, 1, x), cursor++; 
// L => cursor--
// B => string.splice(cursor, 1), cursor--;
// D => cursor++;
