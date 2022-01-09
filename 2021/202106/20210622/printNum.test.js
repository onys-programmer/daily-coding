describe('', () => {
  let result = [0];
  
  function printNum() {
    for(let i = 0; i < 11; i++) {
      let addingInt = i >= 9 ? 256 : Math.pow(2, i)
      result.push(addingInt);
    }

    return result;
  }

  it('', () => {
    expect(printNum()).toStrictEqual([0,1,2,4,8,16,32,64,128,256,256,256]);
  });
});
