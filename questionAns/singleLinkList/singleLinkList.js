/* eslint-disable no-console */
const LinkedList = require('../../linkedList/linkedList');
const {STORE, reverse} = require('../store/store');
const {arrayContent , names, log} = STORE;


const main = (data) => {

  const SSL = new LinkedList();

  let i = 0;
  while (i < data.length){
    SSL.insertFirst(data[i]);
    i++;
  }
  return SSL; 

};

// log(main(arrayContent));

const addTo = (data) =>{
  const SSL = main(arrayContent);

  SSL.insertFirst(data);

  return SSL;
};

// log(addTo(names.tauhida));

const remove = (itemToRemove) =>{
  const SSL = addTo(names.tauhida);

  SSL.remove(itemToRemove);

  return SSL;
};

//log(remove(names.squirrel));

const insertBefore = (find, item) =>{
  const SSL = addTo(names.tauhida);

  SSL.insertBefore(find,item);
  
  return SSL; 

};

// console.table(insertBefore('Boomer',names.athena));

const insertAfter = (find,item) =>{
  const SSL = insertBefore('Boomer',names.athena);

  SSL.insertAfter(find,item);

  return SSL;
};

// log(insertAfter('Helo',names.hotdog));

const insertA= (index,item) =>{

  const SSL = insertAfter('Helo',names.hotdog);

  SSL.insertAt(index,item);

  return SSL;
    
};

// log(insertA(2,names.kat));


const display =()=>{
  const SSL = insertAfter('Helo',names.hotdog);

  return STORE.display(SSL);
};

//log(display());

const size =() =>{
  const SSL = insertAfter('Helo',names.hotdog);

  return STORE.size(SSL);

};

//log(size());

const hasContent = () => {
  const SSL = insertAfter('Helo',names.hotdog);

  return STORE.isEmpty(SSL);

};

//log(hasContent());

const getBefore =()=>{
  const SSL = insertAfter('Helo',names.hotdog);

  return STORE.findPrevious(SSL,'Helo');
};

//log(getBefore());

const getLast = () => {
  const SSL = insertAfter('Helo', names.hotdog);

  return STORE.findLast(SSL);
};

//log(getLast());




const reverseList = () =>{
  const SSL = insertAfter('Helo', names.hotdog);

  return reverse(SSL);
};

log(reverseList());