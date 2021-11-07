import pushToStack from './pushToStack.js';

describe('pushToStack"+"', () => {
  describe("when target is in resource", () => {
    const target = 4;
    const resource = [1,2,3,4,5,6,7,8];
    const stack= [];

    it('pushes elements until the last of the stack becomes the target', () => {
      pushToStack(target, resource, stack);

      expect(resource).toStrictEqual([5,6,7,8]);
      expect(stack).toStrictEqual([1,2,3,4]);
    });
  });

  describe("when the target is not in resource", () => {
    const target = 3;
    const resource = [];
    const stack= [3,4];

    it('does nothing', () => {
      pushToStack(target, resource, stack);

      expect(resource).toStrictEqual([]);
      expect(stack).toStrictEqual([3,4]);
    });
  });
});
