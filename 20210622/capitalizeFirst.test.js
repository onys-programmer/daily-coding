describe('capitalizeFirst', () => {
  function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1);
  }

  function capitalizeFirst(arr) {
    if (arr.length === 1) {
      return [capitalize(arr[0])];
    }

    let result = capitalizeFirst(arr.slice(0, -1));
    result.push(capitalize(arr.slice().pop()));

    return result;
  }

  function myCapitalizeFirst(arr) {
    const newArr = arr.map(e => capitalize(e));
    return newArr;
  }

  it('capitalizes the first letter of each string in the array', () => {
    expect(capitalizeFirst(['car', 'taco', 'banana']))
      .toStrictEqual(['Car', 'Taco', 'Banana']);
    expect(myCapitalizeFirst(['car', 'taco', 'banana']))
      .toStrictEqual(['Car', 'Taco', 'Banana']);
    expect(capitalize('car')).toBe('Car');
  });
});
