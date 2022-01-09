test('', () => {
  const user = {
    name: "John"
  };

  // 아래 코드는 에러 없이 실행될까요?
  user.name = "Pete";

  expect(user.name).toBe("Pete");

  // 변수 user는 객체 참조 값을 저장하고 있는데, 
  // const는 이 값이 변경되는걸 막는 것이지, 
  // 객체의 내용(프로퍼티)을 변경하는 건 막지 않습니다.
});
