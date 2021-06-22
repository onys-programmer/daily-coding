describe('capitalizeFirst', () => {
  function capitalizeFirst(arr) {
    const newArr = arr.map(e => capitalize(e));
    return newArr;
  }

  function capitalize(string) {
    const capital = string[0].toUpperCase();
    const newArr = [capital , ...string.split("").slice(1)];
    const newString = newArr.join("");

    return newString;
  }

  it('capitalizes the first letter of each string in the array', () => {
    expect(capitalizeFirst(['car', 'taco', 'banana'])).toStrictEqual(['Car', 'Taco', 'Banana']);
    expect(capitalize('car')).toBe('Car');
  }); 
});
