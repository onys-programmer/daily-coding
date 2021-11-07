function solution(array, commands) {
  return commands.map(
    command => {
    const [i, j, k] = command;

    const slicedArray = array.filter((value, index) => (index >= i - 1 && index <= j - 1));

    const sortedArray = slicedArray.sort((a,b) => a -b);

    return sortedArray[k -1];
  }
  );
}

module.exports = solution;