const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.tail = null;
  }

  getUnderlyingList() {
    let item = this.tail;
    let list = {value: item.value, next: null}   

    while (item.next !== null) {
      item = item.next;
      list = {value: item.value, next: list}  
    }
    return list

  }

  enqueue( value ) {
    const node = new ListNode(value);

    if (this.tail == null) {
      this.tail = node;
    } else {
      node.next = this.tail;
      this.tail = node;
    }
  }

  dequeue() {
    let item = this.tail;
    let neededNode = item;
    while (item.next !== null) {
      neededNode = item;
      item = item.next;
      
    }
    neededNode.next = null;
    
    return item.value;
  }

}
