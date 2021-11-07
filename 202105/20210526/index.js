function solution(arr1, arr2) {
  let answer = [[]];
  console.log(answer);
  
for(let j = 0; j < arr1.length; j++) {
  answer[j] = [];
  for(let i = 0; i < arr1[0].length; i++) {
    answer[j][i] = arr1[j][i] + arr2[j][i];
  }
}

return answer;
}
