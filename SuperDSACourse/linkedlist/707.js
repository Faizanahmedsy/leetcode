function Node(value) {
  this.next = null;
  this.value = value;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let currentNode = this.head;
  for (let position = 0; position < index; position++) {
    currentNode = currentNode.next;
  }
  return currentNode.value;
};

MyLinkedList.prototype.addAtHead = function (value) {
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
  } else {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, value) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(value);
  if (index === this.size) return this.addAtTail(value);
  const newNode = new Node(value);
  let currentNode = this.head;
  for (let position = 0; position < index - 1; position++) {
    currentNode = currentNode.next;
  }
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let currentNode = this.head;
    for (let position = 0; position < index - 1; position++) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
  }
  this.size--;
};
