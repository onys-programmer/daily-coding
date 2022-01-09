function solution(v) {
  // _|자형
  // 1,4 3,4 => y좌표가 같음 -> x좌표는 1아니면 3임.
  // 3,10 주어짐 =>  나머지 x 좌표 1과 막배열의 y좌표 10 => 1,10

  // |-자형
  // 1,1 2,2 => x좌표 y좌표 모두 다름(대각선) => x좌표는 1 아니면 2
  // 1,2 주어짐 => 나머지 x좌표 2와 마지막 배열의 y좌표  => 2,1
  
  // ㄱ자형
  // 5,14 7,1 => (대각선) => x좌표는 5아니면 7
  // 7,14 주어짐 => 나머지 x좌표 5와 두번째 배열의 y좌표 1
  
  // ㄴ자형
  // 1,1 3,1 => y좌표가 같음 -> x좌표는 1아니면 3
  // 1,4 주어짐 => x좌표는 3, y좌표는 막 배열의 4 => 3,4
  
  // 인접 노드와 1개 일치 1개 다름
  
  // 짝꿍 없는 애 있으면 걔가 범인
  var answer = [];

  let xs = [];
  for(let i = 0; i < 3; i++) {
      xs.push(v[i][0]);
  }
  
  let ys = [];
  for(let i = 0; i < 3; i++) {
      ys.push(v[i][1])
  }
  
  if(xs[0] === xs[1]) {
      answer.push(xs[2]);
  } else if(xs[0] === xs[2]) {
      answer.push(xs[1]);
  } else {
      answer.push(xs[0]);
  }
  
  if(ys[0] === ys[1]) {
      answer.push(ys[2]);
  } else if(ys[0] === ys[2]) {
      answer.push(ys[1]);
  } else {
      answer.push(ys[0]);
  }
  
  return answer;
}
