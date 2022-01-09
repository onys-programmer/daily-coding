test('', () => {
  const camelize = (str) => {
    // split으로 문자열을 배열로 바꾸고, join을 사용해 다시 합치기
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
  }


  expect(camelize("background-color")).toBe('backgroundColor');
  expect(camelize("list-style-image")).toBe('listStyleImage');
  expect(camelize("-webkit-transition")).toBe('WebkitTransition');
})
