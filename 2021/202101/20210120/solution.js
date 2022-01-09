function solution(answers) {
  const result = [];

  const person1 = [];
  let person1Point = 0;

  const person2 = [];
  let person2Point = 0;

  const person3 = [];
  let person3Point = 0;

  for(let i =0; i < 2000; i += 5 ) {
    person1[i] = 1;
    person1[i+1] = 2;
    person1[i+2] = 3;
    person1[i+3] = 4;
    person1[i+4] = 5;
  }

  let i = 0
  while(person1[i])
  {
    if(person1[i] == answers[i]) {
      person1Point++;
    }
    i++;
  }

  return result;
}

module.exports = solution;