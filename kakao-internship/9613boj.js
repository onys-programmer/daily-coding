const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let limit = 101;
let result = "";
let input = [];

const solution = (input) => {
  for(let i = 1; i < input.length; i++) {
    let arr = input[i].split(" ").map(s => +s);
    arr.shift();

    let sum = 0;

    for(let j = 0; j < arr.length-1; j++) {
      for(let k = j+1; k < arr.length; k++) {
        sum += gcd(arr[j], arr[k]);
      }
    }

    result += sum + "\n";
  }

  console.log(result);
};

const gcd = (a, b) => {
  let bigOne = a >= b ? a : b;
  let smallOne = a >= b ? b : a;
  var R;

  while(bigOne % smallOne !== 0) {
    R = bigOne % smallOne;
    bigOne = smallOne;
    smallOne = R;
  }

  return smallOne;
}

rl.on('line', function (line) {
  input.push(line);
  count++
  if(input.length === 1) {
    limit = +input[0]+1;
  }
  if (input.length >= limit) {
    rl.close();
  }
})
  .on("close", function () {
    solution(input);
    process.exit();
  });
