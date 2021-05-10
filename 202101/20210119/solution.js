function solution(array, commands) {
  const result = [];
  if (array.length <= 100) {
    
    for (let x = 0; x < commands.length; x++) {
      const i = commands[x][0];
      const j = commands[x][1];
      const k = commands[x][2];

      const slicedArray = array.slice(i - 1, j);

      const sortedArray = slicedArray.sort((a,b) => (a-b));

      result[x] = sortedArray[k - 1];
    }
    return result;
  } else {
    return false;
  }
}

module.exports = solution;