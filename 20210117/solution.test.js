test('solution', () => {
    const solution = require('./solution');

    expect(solution(3)).toBe('수박수');
    expect(solution(4)).toBe('수박수박');
})