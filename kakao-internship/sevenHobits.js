const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = "";
let input = [];

const solution = (input) => {
  let overflow = input.reduce((acc, cur) => acc + cur, 0) - 100;

  for(let j = 0; j < input.length-1; j++) {
    for(let i = j+1; i < input.length; i++) {
      if (input[j]+input[i] === overflow) {
        input = input.filter((ele) => ele !== input[i] && ele !== input[j]);
      }
    }
  }
  
  input.sort((a,b) => a - b);

  input.forEach((ele, idx) => {
    result += ele + "\n";
  })
  console.log(result);
};

rl.on('line', function (line) {
  input.push(+line);

  if(input.length >= 9) {
    rl.close();
  }
})
.on("close", function () {
  solution(input);
  process.exit();
});
