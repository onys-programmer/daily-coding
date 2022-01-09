describe('validAnagram', () => {
  function validAnagram(arr1, arr2) {
    const sorted1 = arr1.split("").sort().join("");
    const sorted2 = arr2.split("").sort().join("");

    if(arr1 === arr2) return true;
    if(sorted1 === sorted2) return true;
    return false;
  }
  it('checks if arrays have same alphabets', () => {
    expect(validAnagram('', '')).toBe(true);
    expect(validAnagram('aaz', 'zza')).toBe(false);
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
  })
});
