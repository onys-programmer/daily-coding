function solution(participant, completion) {

  const hash = completion.reduce((obj, name) => {
    obj[name] = obj[name] ? obj[name]+1 : 1;
    return obj;
  }, {})

  return participant.find(name => {
    if(hash[name])
      return hash[name] -1;
    else 
      return true;
  })
}

module.exports = solution;