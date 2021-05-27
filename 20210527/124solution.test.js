test('', () => {
  function solution (digit) {
    let digit3exp = parseTo3exp(digit);

    let string = digit3exp.reverse().join("");

    string.replace(string, /0/g, "1");
    string.replace(string, /1/g, "2");
    string.replace(string, /2/g, "4");

    return string*1;
  }

  function parseTo3exp(digit) {
    if(digit % 3 === 0) {
    let remainders = [];
    let quotient = digit;
    while(1) {
      remainders.push(quotient % 3);
      if(quotient < 3) break;
      quotient = Math.floor(quotient / 3);
    }

    return remainders;
    }

    let remainders = [];
    let quotient = digit;
    while(1) {
      remainders.push(quotient % 3);
      if(quotient < 3) break;
      quotient = Math.floor(quotient / 3);
    }

    return remainders;
  }

  // 16
  // 16 % 3 => 
  // Math.floor(16 / 3)

  expect(solution(4)).toBe(11);
});
