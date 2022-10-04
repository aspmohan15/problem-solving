
class circularQueue {
    constructor(capacity) {
      this.capacity = new Array(capacity);
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }
  
    dequeue() {
      let items = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return items;
    }
  
    print() {
      return this.items;
    }
  }
  
  let call = new circularQueue();
  call.enqueue(10);
  call.enqueue(20);
  call.enqueue(30);
  call.enqueue(40);
  
  console.log(call.dequeue());
  console.log(call.dequeue());
  console.log(call.print());
  







// _______________________________________________________________________
console.log(arr.sort());

class queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }
  size() {
    return this.items.length;
  }
}

const queueCall = new queue();

queueCall.enqueue(1);
queueCall.enqueue(0);
queueCall.enqueue(120);
queueCall.enqueue(103);
queueCall.enqueue(12);
console.log(queueCall.peek());

class OptimizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(data) {
    this.items[this.rear] = data;
    this.rear++;
  }

  dequeue() {
    if (Object.keys(this.items).length > 0) {
      const items = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return items;
    } else {
      console.log("queueEmpty");
      return;
    }
  }
  isEmpty() {
    f;
  }

  status() {
    console.log(this.front, this.rear);
  }
  peek() {}
  size() {}
  print() {
    return this.items;
  }
}

const OptimizedQueueCall = new OptimizedQueue();

OptimizedQueueCall.dequeue();
OptimizedQueueCall.enqueue(10);
OptimizedQueueCall.status();
console.log(OptimizedQueueCall.print());
