import context from 'jest-plugin-context';

describe('Singly Linked List', () => {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor(val) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val) {
      let newNode = new Node(val);
      if(this.length === 0) {
        this.head = newNode; 
        this.tail = newNode; 
      }
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.length++;
    }
  }

  let singlyLinkedList = new SinglyLinkedList();

  context('when pushes', () => {
    it('pushes new node', () => {      
      singlyLinkedList.push(5);
      expect(singlyLinkedList.length).toBe(1);
      expect(singlyLinkedList.head.val).toBe(5);
      expect(singlyLinkedList.tail.val).toBe(5);

      singlyLinkedList.push(10);
      expect(singlyLinkedList.length).toBe(2);
      expect(singlyLinkedList.head.val).toBe(5);
      expect(singlyLinkedList.tail.val).toBe(10);
    });
  });
});
