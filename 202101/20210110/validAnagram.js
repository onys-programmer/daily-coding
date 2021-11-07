function validAnagram(compared, comparing) {
  if(compared.length !== comparing.length) {
    return false;
  }

  const result = {};

  for(let i = 0; i<compared.length; i++) {
    result[compared[i]] ? result[compared[i]]+=1 : result[compared[i]] = 1;
  }

  for(let i = 0; i<comparing.length; i++) {
    if(!result[comparing[i]]) {
      return false;
    } else {
      result[comparing[i]] -=1;
    }   
  }

  return true;
}

module.exports = validAnagram;