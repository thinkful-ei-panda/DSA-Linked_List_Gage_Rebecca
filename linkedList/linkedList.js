
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}



/*
        ____________            ____________________________________          _________________________________________                        ______________
        |----------|            |----------------------|           |          | -----------------------|               |                       |------------ |
        |   null   |            |----  content    -----|  pointer  |   ===>   | ------- content -------|   pointer     |     ... ===>          |--- Null --- | 
        |----------|            |----------------------|           |          | -----------------------|               |                       |------------ |
        |__________|            ------------------------------------          ------------------------------------------                       |_____________|

        ^HEAD^ 
        having null before it so we can tell where the beginning is 


*/

class LinkedList {

  constructor() {
    this.head = null; 
  }
  /*to make a new item it's call insertion */
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode = new _Node(item, null);
    }
  }

}