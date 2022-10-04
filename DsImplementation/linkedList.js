class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    console.log(count);
    return count;
  }

  lastNode() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  clear() {
    this.head = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
// let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
// node3.next = node4;
// node4.next = node1;

let list = new LinkedList(node1);
// list.clear()
console.log(list.lastNode());




class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  addFirst(newValue) {
    this.node = new Node(newValue);

    this.node.next = this.head;
    this.head = this.node;

    // node.next =

    // console.log(this.head);
  }
}
// let node1 = new Node(1);
// let node2 = new Node(2);
// node1.next = node2;

let node0 = new Node(0);

let list = new LinkedList();

list.addFirst(10);
list.addFirst(12);
list.addFirst(13);
list.addFirst(14);
list.addFirst(15);
list.addFirst(16);
list.addFirst(17);
list.addFirst(18);

console.log(list);
