function solution(participant, completion) {

  function reducer(accumulator, currentValue) {
    const obj = {accumulator, currrentValue : 1};
    return obj;
  }
  const hash = completion.reduce(reducer, {});

  const notCompletion = participant.find(name => {
    if(hash[name]) {
      return hash[name] - 1;
    } else {
      return true;
    };
  });
  return notCompletion;
}

module.exports = solution;
module.exports.hash = solution;