const LinkedList = require('./LinkedList.js')

const testLinkedList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testLinkedList.addToTail(i);
}

module.exports = testLinkedList;