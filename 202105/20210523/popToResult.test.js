import popToResult from './popToResult.js';

describe('popToResult"-"', () => {
  describe("stack에 빼낼 게 있을 때", () => {
    it('pops last element from stack to the result array', () => {
      let answer = "";
      const target = 4;
      let stack = [1,2,3,4];
      let result = [];

      popToResult(target, stack, result);

      expect(result[result.length-1]).toBe(4);
      expect(stack).toStrictEqual([1,2,3]);
      expect(answer).toBe("-\n");
    });
  });

  describe("stack에 빼낼 게 없을 때", () => {
    it('does nothing', () => {
      const target = 3;
      const stack= [3,4];
      let result = [];

      popToResult(target, stack, result);

      expect(result[result.length-1]).not.toBe(4);
      expect(stack).toStrictEqual([3, 4]);
    });
  });
});
