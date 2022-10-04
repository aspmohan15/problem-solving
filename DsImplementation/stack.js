
// top
// data = 0
// push()
// pop()
// print()
2;
class stack {
  2;
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }
  pop() {
    this.items.pop();
  }
  print() {
    return this.items[this.items.length - 1];
  }
  peek() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const StackCall = new stack();

StackCall.push(10);
StackCall.push(20);
StackCall.push(30);
StackCall.push(50);
StackCall.push(40);
StackCall.pop();
console.log(StackCall.print());
console.log(StackCall.peek());
console.log(StackCall.peek());
console.log(StackCall.peek());
// console.log(StackCall.peek());

console.log(StackCall.isEmpty());
