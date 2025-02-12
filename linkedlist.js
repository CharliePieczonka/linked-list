class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = node;
    }

    this.tail = node;
    this.size++;
  }

  prepend(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let copy = this.head;
      node.nextNode = copy;
      this.head = node;
    }

    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      if (currentNode.nextNode === null) {
        return null;
      }

      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    prevNode.nextNode = null;
    this.tail = prevNode;
    this.size--;
  }

  contains(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    for (let i = 1; i <= this.size; i++) {
      if (currentNode.value === value) {
        return i;
      }

      currentNode = currentNode.nextNode;
    }

    return null;
  }

  toString() {
    let string = "";
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      string += "( ";
      string += currentNode.value;
      string += " ) -> ";
      currentNode = currentNode.nextNode;
    }

    string += "null";
    return string;
  }

  updateAt(value, index) {
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    currentNode.value = value;
  }
}

class Node {
  value = null;
  nextNode = null;

  constructor(value) {
    this.value = value;
  }
}

export { LinkedList };
