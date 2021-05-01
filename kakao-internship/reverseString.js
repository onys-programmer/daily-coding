let inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let result = "";

for(let i = 1; i < inp.length-1; i++) {
  let arr = inp[i].split(" "); 
  let reversedArr = arr.map((i) => i.split("").reverse().join(''));
  result += reversedArr.join(' ') + "\n";
}

console.log(result);
