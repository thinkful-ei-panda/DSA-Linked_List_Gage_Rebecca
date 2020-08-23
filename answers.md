### part 1 : Create a linked list class
Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (`insertFirst`, `insertLast`, `remove`, `find`) from scratch.


- done see `./linkedList/linkedList.js`

 ### part 2: Create a singly linked list

Write a function `main`. Within the function, using the linked list class above, create a linked list with the name `SLL` and add the following items to your linked list: `Apollo`, `Boomer`, `Helo`, `Husker`, `Starbuck`.

- Add `Tauhida` to the list.
sure

- Remove `squirrel` from the list.
.... (눈_눈) sure....
```
===========>>>>>>>>> Item not found <<<<<<<<===========
LinkedList {
  head: _Node {
    value: 'Tauhida',
    next: _Node { value: 'Starbuck', next: [_Node] }
  }
}
```

- Implement a function called `insertBefore()` in the 
class that inserts a new node before a given node 
containing a key.

```
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
  
      const newItem = new _Node(item, currNode);
      let before = this.head;
      while(currNode !== before.next){
        if(before === null){
          return null;
        }
        before = before.next;
      }
      before.next = newItem;
      console.log(`${newItem.value} was inserted before ${before.value} :3 \n`)
      return `${newItem.value} was inserted before ${before.value} :3 \n`;
    }
  }
```

- Implement a function called `insertAfter()` in the class that inserts a new node after a node containing the key.

```
  insertAfter(key, item){

    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      //first find the item we want to insert after
      let currNode = this.find(key);
      /* set a marker to count to, that it's val can be that of
       of the val of the new item's next */
      let after = this.head;
      //run loop
      while(after !== currNode.next){
        if (after === null ){
          return null;
        }
        after = after.next;
      }
      /*making new item with next content being that of 
      the key item */ 
      const newItem = new _Node(item,after);
      //reset curr items next val to be that of new time 
      currNode.next = newItem ;
      console.log(`${newItem.value} was inserted after ${currNode.value} \n`);
      return `${newItem.value} was inserted after ${currNode.value}`;
    }
  }
```

- Implement a function called `insertAt()` that inserts an item at a specific position in the linked list.

```
  insertAt(index, item){
    console.log('called');
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
```

- Add `Athena` before `Boomer` using your `insertBefore()` 
function.

logged ` Athena was inserted before Boomer :3` L.74 of linkedList.js 

- Add `Hotdog` after `Helo` using the `insertAfter()` method.

logged `Hotdog was inserted after Helo` l.101 of linkedList.js

- Using the `insertAt()` method insert `Kat` in the 3rd 
position of the list.

logged `Kat was inserted before Husker :3` l.74 of linkedList.js

- Remove `Tauhida` from the list.



### part 3: Supplemental functions for a linked list
Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them __**outside**__ the linked list class. Test each function using the list created in exercise 1.

- `display`: displays the linked list

```
  display : (head) => {
    if(head === null){
      return 'no content in storage';
    }
    const nameList ={
      names : [],
    };
    let grabbyBoi = head;
    while(grabbyBoi !== null){
      nameList.names.push(grabbyBoi.value);
      grabbyBoi = grabbyBoi.next;
    } 
    return nameList.names;
  },
```

- `size`: returns the size of the linked list

```
  size : (head)=>{
    if(head === null){
      return 0;
    }
    let counter = head;
    let i = 0;
    while(counter !== null){
      counter = counter.next;
      i++;
    }
    return i;
  },
```

- `isEmpty`: finds if the list is empty or not (without using the `size()` function)

```
  isEmpty : (head) => {
    if(head === null){
      return true;
    }else{
      return false;
    }
  }
```

- `findPrevious`: finds the node before the item you are looking for

```
  findPrevious : (head, lookUp) =>{
    if(head === null ){
      return 'no content';
    }
    let content = head;
    while(content.next.value !== lookUp){
      if(content.next == null)
        return 'nothing can be found';
      content = content.next;
    }
    return content;
  }
```

- `findLast`: returns the last node in the linked list

```
findLast : (obj) =>{
    if(obj.head === null)
      return 'no content in list';

    let content = obj.head;
    while(content.next !== null){

      content = content.next;
    }
    return content;
  }

};

```

all in `./questionAns/store/store.js`



### part 4: Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

```
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```
being useless lol, it doesn't even return anything.
talk about a function that takes the piss...
but i guess i should give it a "*detailed look over*"

```
/*calling function*/
function WhatDoesThisProgramDo(lst) {
    /* getting head content form the imported list */
    let current = lst.head;
    /* run loop till length end */
    while (current !== null) {
        /* create list copy . . . */
        let newNode = current;
        /* run till last item in the list is hit*/
        while (newNode.next !== null) {
                /*if the value of the next item is == to value of the list of the outer loop ...*/
            if (newNode.next.value === current.value) {
                /*list item skips that item in the list becomething the ...next . next item in the list (like i +=2)*/
                newNode.next = newNode.next.next;
            }
            /*else become the next item (almost like i++)*/
            else {
                newNode = newNode.next;
            }
        }
        /*... then i++ and do it over again ... */
        current = current.next;
    }
}
```
`O(n^2)` because it run x amount of time x amount of times (x*x)


### part 5: Reverse a list
Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.


```
const reverse = (lis, prev=null,next=null) =>{
  STORE.log('*');
  if(lis.head == null && !prev){
    return 'the list must be empty. or you sent the wrong thing';
  }
  let { head } = lis;
  
  if(head == null){
    return { head : prev};
  }
  next = head.next;
  head.next = prev;
  prev = head;
  head = next;

  let pack = {head};
  return reverse(pack,prev,next);
};
```


### part 6: 3rd from the end
Write an algorithm to find the 3rd element from the end of a linked list.
__***Note***__ You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

```
const findThird = (lis) => {
  if(lis.head == null){
    throw new Error('no content');
  }
  let size = STORE.size(lis);
  let i = 0;
  let {head} = lis;
  while(i < (size - 4)){
    head = head.next;
    i++;
  }
  lis.head = head;
  return lis;
};
```



### part 7: Middle of a list

Write an algorithm to find the middle element of a linked list. 
__***Note***__ You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the `size()` function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

```
const findMiddle = (lis) => {
  if(lis.head == null){
    throw new Error('no content');
  }
  let size = STORE.size(lis);
  let half = Math.floor(size/2);
  let {head} = lis;
  let i = 0;
  while(i < (half - 1)){
    head = head.next;
    i++;
  }
  lis.head = head; 
  return lis;

};
```

### part 8: Cycle in a list

Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its `next` value pointing to an earlier node in the list). For this exercise, create a linked list with the name `CycleList`. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a `cycleList` function.


```
  isCycle : (lis) => {
    if(lis.head === null)throw new Error('Invalid list entered into "isCycle"');

    let check = lis.head , temp = lis.head ; 

    while (temp.next !== null){
      if(check.value == temp.next.value && check.next == temp.next.next)return true;

      temp = temp.next;
    }
    return false;
  },
```

### part 9: Doubly linked list

Implement a doubly linked list. The primary functions of the doubly linked list would be `insert` (`First`, `Last`, `Before`, `After`, and `At`), `remove`, and `find`. Write a function `mainDLL`, and within it create the doubly linked list `DLL` and add the following items to it: `Aquaria`, `Caprica`, `Gemenon`, `Picon`, `Sagittaron`.

- Add `Tauron` to the list
- Remove `Picon` from the list

see `./linkList/doublyLinkedList.js/`


### part 10: Reverse a DLL

Given the doubly linked list above,
write a program that reverses the doubly linked list.
How is this implementation different than reversing the singly linked list?

it's basicly this.head = this.tail.... with some steps.

```
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
```

