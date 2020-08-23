/* eslint-disable no-console */

class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

  
class DoublyLinkedList {
  
  constructor() {
    this.head = null; 
    this.tail = null; 
  }
  /*to make a new item it's call insertion */
  insertFirst(item) {

    if(this.head === null){
      this.head = new _Node(item,null,null);
    }else{
      const newNode = new _Node(item, this.head, null);
      const afterHead = this.head;
      afterHead.previous = newNode;
      newNode.next = afterHead;
      this.head = newNode;   
    }
    
    
    if(this.tail === null)
    {
      this.tail = this.head;
    }
  }
  insertLast(item) {
    if(this.head === null) 
    {
      this.insertFirst(item);
    }
    else
    {
      let newNode = new _Node(item, null , this.tail);
      this.tail.next = newNode;
      this.tail = node;
      
    }
  }
  insertBefore(key,item){

    if(typeof key === 'object'){
      key = key.value;
    }
    
    if(this.head.value === key){
      this.insertFirst(key);
    }

    if(this.head === null){
      this.insertFirst(item);
    }else{
      let currNode = this.find(key);
  
      if(currNode === null ){
        return null;
      }
  
      const newItem = new _Node(item, currNode , currNode.previous);
      if(this.head === currNode) this.head = newItem;
      
      if(currNode.previous !== null) currNode.previous.next = newItem;
      currNode.previous = newItem; 
    }
  }
  insertAfter(key, item){
  
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      //first find the item we want to insert after
      let currNode = this.find(key);
      /* set a marker to count to, that it's val can be that of
         of the val of the new item's next */
      /*making new item with next content being that of 
        the key item */ 
      const newItem = new _Node(item,currNode.next,currNode);
      //reset curr items next val to be that of new time 
      currNode.next = newItem ;
      return ;
    }
  }
  insertAt(index, item){
    if(this.head === null){
      this.insertFirst(item);
    }else{
      let nodeByIndex = this.head;
      let i = 0;
      while(index !== i){
        if(nodeByIndex === null){
          return null;
        }
        nodeByIndex = nodeByIndex.next;
        i++;
      }
      this.insertBefore(nodeByIndex,item);
    }
  }
  find(item){
    //start at the head 
    let currNode = this.head; 
    //If the list is empty
    if(!this.head) {
      return null;
    }
    // check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
            and the item is not on the list */
      if(currNode.next === null)
      {
        return null; 
      }
      else
      {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) { 
    //If the list is empty 
    if (!this.head) {
      return null;
    }
    if(this.head.value === item ){
      this.head = this.head.next;
    }
    if(this.tail.value === item){
      this.tail = this.tail.previous; 
      this.tail.next = null;
    }
    let currNode = this.find(item);
    if(!currNode) return `${item} could not be found`;

    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous; 
  }
  reverse(){
    if(!this.head) throw new Error('eh?');

    let newTail = this.head,
      newHead = null; 

    while(newTail !== null){
      newHead = newTail.previous;
      newTail.previous = newTail.next;
      newTail.next = newHead;
      newTail = newTail.previous; 
    }
    if(newHead !== null){
      this.head = newHead.previous;
    }
  }
}
  
module.exports = DoublyLinkedList;