function primeNumber(number) {
  let divider = 0;
  let arrayList = [];

  for(let i = 2; i <= number; i++) {
    for(let j = 2; j < i; j++) {
      if(i % j == 0) {
        divider = 1;
        break;
      }
    }

    if(!divider) {
      arrayList.push(i);
    }
    divider = 0;
  }
  
return arrayList;
}

test('primeNumber', () => {
  expect(primeNumber(10)).toStrictEqual([2,3,5,7]);
  expect(primeNumber(100)).toStrictEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97])
});