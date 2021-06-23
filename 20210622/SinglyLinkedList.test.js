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
      if(!this.head) {
        this.head = newNode; 
        this.tail = this.head; 
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.length++;

      return this;
    }

    pop() {
      if(!this.head) return undefined;
      let current = this.head;
      let newTail = current;

      while(current.next) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      
      return current;
    }

    get(index) {
      if(index < 0 || index > this.length) return undefined;
      let current = this.head;
      for(let i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
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

      singlyLinkedList.push(15);
      expect(singlyLinkedList.length).toBe(3);
      expect(singlyLinkedList.head.val).toBe(5);
      expect(singlyLinkedList.tail.val).toBe(15);
    });
  });

  context('when pops', () => {
    it('pops the last node', () => {      
      expect(singlyLinkedList.pop().val).toBe(15);
      expect(singlyLinkedList.tail.val).toBe(10);
      expect(singlyLinkedList.length).toBe(2);
    });
  });

  context('when gets', () => {
    it('gets a specific node with index', () => {      
      expect(singlyLinkedList.get(0).val).toBe(5);
      expect(singlyLinkedList.get(1).val).toBe(10);
    });
  });
});
