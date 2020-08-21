/* eslint-disable eqeqeq */
const STORE = {
  arrayContent : [
    'Apollo',
    'Boomer',
    'Helo',
    'Husker',
    'Starbuck'
  ],
  names : {
    tauhida : 'Tauhida',
    squirrel: 'squirrel',
    athena : 'Athena',
    kat : 'Kat',
    hotdog : 'Hotdog',
  },

  log : console.log,

  display : (lis) => {
    if(lis.head === null){
      return 'no content in storage';
    }
    const nameList ={
      names : [],
    };
    let grabbyBoi = lis.head;
    while(grabbyBoi !== null){
      nameList.names.push(grabbyBoi.value);
      grabbyBoi = grabbyBoi.next;
    } 
    return nameList.names;
  },

  size : (lis)=>{
    if(lis.head === null){
      return 0;
    }
    let counter = lis.head;
    let i = 0;
    while(counter !== null){
      counter = counter.next;
      i++;
    }
    return i;
  },

  isEmpty : (lis) => {
    if(lis.head === null){
      return true;
    }else{
      return false;
    }
  },
  findPrevious : (lis, lookUp) =>{
    if(lis.head === null ){
      return 'no content';
    }
    let content = lis.head;
    while(content.next.value !== lookUp){
      if(content.next == null)
        return 'nothing can be found';
      content = content.next;
    }
    return content;
  },
  findLast : (lis) =>{
    if(lis.head === null)
      return 'no content in list';

    let content = lis.head;
    while(content.next !== null){

      content = content.next;
    }
    return content;
  },
  reverse : (lis) =>{

  }

};

module.exports = STORE; 