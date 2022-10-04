class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNewNode(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        return this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    }
  }

  print() {
    if (!this.root) {
      return -1;
    } else {
      let current = this.root.left;
      while (current) {
        // console.log(current.value);
        if (current) {
          current = current.left;
        }
      }
      let rightCurrent = this.root.right;
      while (rightCurrent) {
        // console.log(rightCurrent.value);
        if (rightCurrent) {
          rightCurrent = rightCurrent.right;
        }
      }
    }
  }
  search(rootNode, value) {
    if (!rootNode) {
      return -1;
    } else {
      // console.log(rootNode.value);
      if (rootNode.value === value) {
        return "Matched";
      } else if (value < rootNode.value) {
        return this.search(rootNode.left, value);
      } else {
        // console.log(rootNode.right);
        return this.search(rootNode.right, value);
      }
    }
  }

  // DFS Algorithm
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

let bst = new BinarySearchTree();

bst.insertNewNode(10);
bst.insertNewNode(11);
bst.insertNewNode(12);
bst.insertNewNode(13);
bst.insertNewNode(4);
bst.insertNewNode(3);
bst.insertNewNode(2);
bst.insertNewNode(1);
bst.insertNewNode(5);
bst.insertNewNode(6);
bst.print();
console.log("preOrder");
bst.preOrder(bst.root);
console.log("inOrder");
bst.inOrder(bst.root);
console.log("postOrder");
bst.postOrder(bst.root);
// console.log(bst.search(bst.root, 13));
