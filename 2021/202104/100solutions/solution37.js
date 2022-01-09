function solution(n) {
  var answer = 0;
      for(let i = 0; i < `${n}`.length; i++) {
          answer += Math.floor(
              n % Math.pow(10, i+1) / Math.pow(10, i)
          );
      }
  return answer;
}
