const DoublyLinkedList = require('../../linkedList/doublyLinkedList');
const  { STORE } = require('../store/store');

const { log, display } = STORE;


const pushContent = () =>{
  const DLL = new DoublyLinkedList();
  let i = 0,
    {ddlContent} = STORE;
  while (i < ddlContent.length){
    DLL.insertFirst(ddlContent[i]);
    i++;
  }

  DLL.remove('Picon');

  DLL.reverse();

  return DLL;
};

log(display(pushContent()));

