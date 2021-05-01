//(와 )만으로 구성된 문자열
 // 모양이 바르게 구성된 문자열을 올바른 괄호 문자열이라고 한다. VPS
 // () 한쌍의 괄호는 기본 VPS
 // x가 VPS라면 하나의 괄호에 넣은 새로운 문자열 (x)도 VPS가 된다.
 // 두 VPS x와 y를 접합시킨 새로운 문자열 xy도 VPS가 된다.
 // 예를 들어 "(())()"와 "((()))"는 VPS이지만 "(()(", "(())()))" 그리고 "(()"는 VPS 아니다.
 // VPS인지 아닌지를 판단해서 그 결과를 YES와 NO로 나타내여야 한다.

let inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let result = "";

for(let j = 1; j < inp.length-1 ; j ++) {
  let arr = inp[j].split("");
  let isVPS = [];

  for(let i = 0; i < inp[j].length; i++) {
    if(isVPS.length === 0) {
      isVPS.push(arr[i]);
    } else {
      if(isVPS[isVPS.length - 1] === '(') {
        isVPS.push(arr[i]);
        if(arr[i] === ')') {
          isVPS.pop();
          isVPS.pop();
        }
      } else {
        isVPS.push(arr[i]);
      }
    }
  }

  if (isVPS.length !== 0) {
    result += "NO" + "\n";
  } else {
    result += "YES" + "\n";
  }
}

console.log(result);
