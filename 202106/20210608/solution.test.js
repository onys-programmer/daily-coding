test('', () => {
  function getType(command) {
    return command.split(" ");
  }

  expect(getType("L")).toBe("L");
  expect(getType("P b")).toStrictEqual(["P", "b"]);

  function solution(arr) {
    arr.forEach(e => excute(getType(e)));
  }

  let commands = ["P x", "L", "P y"];
  expect(solution(commands)).toBe(abcdyx);

  // type이 L이면
  // 
  // type이 D이면
  // type이 B이면
  // type이 P이면 
});
