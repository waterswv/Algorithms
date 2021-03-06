class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }

  add(data) {
    const nodeToAdd = new Node(data);
    let nodeToCheck = this.head;
    // This check is in the event this is the very first Node being added
    if(!nodeToCheck) {
          this.head = nodeToAdd;
          this.length++;
          return nodeToAdd;
        }
    while(nodeToCheck.next) {
          nodeToCheck = nodeToCheck.next;
        }
    nodeToCheck.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
  }
  get(num) {
      let nodeToCheck = this.head;
      let count = 0;

      if(num > this.length) return "Doesn't Exist!"

      while(count < num) {
        nodeToCheck = nodeToCheck.next;
        count++;
      }

      return nodeToCheck;
    }
  remove(num) {
      let nodeToCheck = this.head,
          count       = 0,
          prevNode    = null;

      if(num >= this.length) return console.log('Does Not Exist')

      if(num === 0) {
        this.head = nodeToCheck.next;
        this.length--;

        return this.head;
      }

      while(count < num) {
        prevNode = nodeToCheck;
        nodeToCheck = nodeToCheck.next;
        count++;
      }

      prevNode.next = nodeToCheck.next;
      nodeToCheck = null;
      this.length--;

      return this.head;
    }
}

vm = new LinkedList();
vm.add({seven: 7});
vm.add({eight: 8});
vm.add({nine: 9});
console.log(vm);
vm.remove(0);
console.log(vm);
