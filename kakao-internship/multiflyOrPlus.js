const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = "";
let input = [];

const solution = (input) => {
  input = input[0].split("");
  input = input.filter(ele => ele != 0);

  result = input.reduce((acc, cur) => {
    return cur != 1 ? acc * cur : acc + cur;
  }
  , 1);

  console.log(result);
};

rl.on('line', function (line) {
  input.push(line);

  if(input.length >= 1) {
    rl.close();
  }
})
.on("close", function () {
  solution(input);
  process.exit();
});
