describe('sameFrequency', () => {
  function sameFrequency(num1, num2) {
    let sorted1 = `${num1}`.split("").sort().join("");
    let sorted2 = `${num2}`.split("").sort().join("");

    if (sorted1 === sorted2) return true;

    return false;
  }
  it('checks if they have same frequency', () => {
    expect(sameFrequency(182,281)).toBe(true);
    expect(sameFrequency(34,14)).toBe(false);
    expect(sameFrequency(22,222)).toBe(false);
  });
});
