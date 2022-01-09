let fiboArr = [0];
function fibo(n) {
  if(n<3) {
    fiboArr[n] = 1;
  }

  if(!fiboArr[n]) {
    fiboArr[n] = fibo(n-1) + fibo(n-2);
  }

  return fiboArr[n];
}

// bottom-up
let d = [];
function fiboB(n) {
  d[0] = 0;
  d[1] = 1;
  
  for(let i = 2; i <= n; i++) {
    d[i] = d[i-1] + d[i-2];
  }

  return d[n];
}
