describe('stack', () => {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(value) {
      const newNode = new Node(value);
      if (!this.first) {
        this.first = newNode;
        this.last = this.first;
      } else {
        let temp = this.first;
        newNode.next = temp;
        this.first = newNode;
      }
      this.size++;
      return this.size;
    }
  }

  describe('when pushes', () => {
    let stackForPush = new Stack();
    stackForPush.push(10);

    it('when first push', () => {
      expect(stackForPush.first.value).toBe(10);
      expect(stackForPush.last.value).toBe(10);
      expect(stackForPush.size).toBe(1);
    });

    let stackForPush2 = new Stack();
    stackForPush2.push(100);
    stackForPush2.push(1000);
    stackForPush2.push(10000);

    it('pushes a node with certain value', () => {
      expect(stackForPush2.first.value).toBe(10000);
      expect(stackForPush2.last.value).toBe(100);
      expect(stackForPush2.size).toBe(3);
    });
  });
});
