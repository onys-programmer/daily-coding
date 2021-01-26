function solution(string) {

  //1. 문자를 받는다.

  // 자르는 방법 말고는?

  // 공백만 세자
  // filter (n == " ") return 공백 개수 + 1
  // 공백 다 지우고 (공백안지운거.length - 지운거.length + 1)

  // 자르는 전략
  // 
  // wordsNum 반환전략
  // 공백으로 자른다. -> 자른 횟수를 구한다. -> return 자른횟수 +1
  // 잘라가지고 배열에 넣어 [i, am, ironman] -> return 배열.length
  // 

  //3. 

  // const stringWithoutSpaces = [];
  let wordsNum = 0;

  function removeSpace(string) {
    let i = 0;
    let lengthCounter = 0;
    while(string[i]) {
      if(string[i] == " ") {
        lengthCounter++;
      }
      i++;
    }
    
    i = 0
    string = string.trim();
    if(string.length != lengthCounter)
    {
      if (string[i] != " ") {
        
        while (string[i]) {
          if (string[i] == " ") {
  
            wordsNum++
  
          }
          i++;
        }
        wordsNum += 1;
      }
    }
    
    
  }

  //공백에 접근 
  //공백개수변수 선언
  //while문 돌 때마다 변수 증가

  removeSpace(string);

  return wordsNum;
}

module.exports = solution;