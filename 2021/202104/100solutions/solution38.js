function solution(i) {
  if(i < 10) return i;
  return solution(i % 10) + solution(Math.floor(i/10));
}
