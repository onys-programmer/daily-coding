function solution(n) {
  const arr = [];
  
  for(let i = 0; i < n + 1; i++) {
      arr.push(true);
  }
  
  for(let i = 2; i*i <= n; i++) {
      if(arr[i]) {
          for(let j = i*i; j <= n; j += i) {
              arr[j] = false;
          }  
      }
  }
  
  arr.splice(0, 2, false, false);
  
  return arr.filter((item) => item === true).length;
}
