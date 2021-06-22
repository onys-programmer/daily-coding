describe('findLongestSubstring', () => {
  function findLongestSubstring() {
    let substring = '';
    
    return substring.length;
  }

  it('returns the length of the longest substring with all distinct characters', () => {
    expect(findLongestSubstring('')).toBe(0);
    expect(findLongestSubstring('thisisawesome')).toBe(6);

  });
});
