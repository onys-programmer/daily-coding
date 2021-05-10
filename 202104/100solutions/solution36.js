function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  for(let i = 0; i <s.length; i++) {
    let letter = s[i];
    if(letter === " ") {
      answer += " ";
      continue;
    }

    let textArr = upper.includes(letter) ? upper : lower;
    let index = textArr.indexOf(letter)+n;
    if(index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }

  return answer;
}
