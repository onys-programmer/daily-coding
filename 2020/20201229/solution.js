function solution(participant, completion) {
  const hash = completion.reduce((obj, name) => {
    obj[name] = obj[name] ? obj[name]+1 : 1;
    return obj;

  }, {});


  return participant.find(t => {
    if(hash[t])
      hash[t] = hash[t] - 1;
    else
      return true;
  })
}

module.exports = solution;