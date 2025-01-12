class Node {
  constructor(value, nextNode) {
    this.value = value || null;
    this.nextNode = nextNode || null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.sizeValue = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.nextNode) {
        curr = curr.nextNode;
      }
      curr.nextNode = newNode;
    }
    this.sizeValue++;
  }

  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.sizeValue++;
  }

  size() {
    return this.sizeValue;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let temp = this.head;
    if (!temp) return null;
    while (temp.nextNode) temp = temp.nextNode;

    return temp;
  }

  at(index) {
    if (index < 0 || index >= this.sizeValue) return null;
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.nextNode) this.head = null;
    else {
      let curr = this.head;
      while (curr.nextNode && curr.nextNode.nextNode) {
        curr = curr.nextNode;
      }
      curr.nextNode = null;
    }
    this.sizeValue--;
  }

  contains(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value == value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.head;
    let count = 0;
    while (temp) {
      if (temp.value == value) return count;
      count++;
      temp = temp.nextNode;
    }
    return null;
  }

  toString() {
    let curr = this.head;
    let res = "";
    while (curr !== null) {
      res += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }
    res += "null";
    return res;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.sizeValue) return;
    if (index === 0) this.prepend(value);
    else {
      let newNode = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.nextNode;
      }
      newNode.nextNode = curr.nextNode;
      curr.nextNode = newNode;
    }

    this.sizeValue++;
  }

  removeAt(index) {
    if (index < 0 || index > this.sizeValue) return;
    if (index === this.sizeValue - 1) this.pop();
    else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.nextNode;
      }
      curr.nextNode = curr.nextNode.nextNode;
      this.sizeValue--;
    }
  }
}
