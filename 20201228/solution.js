function solution(participant, completion) {

participant.sort();
completion.sort();

  for(i=0; i<participant.length; i++) {
    if(participant[i] !== completion[i])
    return participant[i];
  }
}

module.exports = solution;