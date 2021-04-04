// 메서드 체이닝 쓰기
// padEnd 쓰기
// chatAt, repeat 쓰기

const firstStep = (new_id) => new_id.toLowerCase();
const secondStep = (new_id_after1) => new_id_after1.replace(/[^\w.-]/g, '');
const thirdStep = (new_id_after2) => new_id_after2.replace(/\.{2,}/g, '.');
const fourthStep = (new_id_after3) => new_id_after3.replace(/^\.|\.$/g, '');
const fifthStep = (new_id_after4) => new_id_after4.replace(/^$/, 'a');
const sixthStep = (new_id_after5) => new_id_after5.slice(0, 15).replace(/\.$/, '')
const seventhStep = (new_id_after6) => {
  if (new_id_after6.length <= 1) {
    new_id_after6 = new_id_after6 + new_id_after6 + new_id_after6;
    return new_id_after6;
  } else if (new_id_after6.length <= 2) {
    new_id_after6 = new_id_after6 + new_id_after6[1]
    return new_id_after6;
  } else return new_id_after6;
}

function solution(new_id) {
  var answer = seventhStep(sixthStep(fifthStep(fourthStep(thirdStep(secondStep(firstStep(new_id)))))));
  return answer;
}
test('solution', () => {
  const new_id = "z-+.^.";
  expect(firstStep(new_id)).toBe("z-+.^.");

  const new_id_after1 = "z-+.^.";
  expect(secondStep(new_id_after1)).toBe("z-..");

  const new_id_after2 = "z-+..";
  expect(thirdStep(new_id_after2)).toBe("z-+.");

  const new_id_after3 = "z-+.";
  expect(fourthStep(new_id_after3)).toBe("z-+");

  const new_id_after4 = "";
  expect(fifthStep(new_id_after4)).toBe("a");

  const new_id_after5 = "bat.y.abcdefghijklm";
  expect(sixthStep(new_id_after5)).toBe("bat.y.abcdefghi");

  const new_id_after6 = "bat.y.abcdefghi";
  expect(seventhStep(new_id_after6)).toBe("bat.y.abcdefghi");
});
