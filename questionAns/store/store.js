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

  display : () => {
    if(this.head === null){
      return 'no content in storage';
    }
    const nameList ={
      names : [],
    };
    let grabbyBoi = this.head;
    while(grabbyBoi !== null){
      nameList.names.Push(grabbyBoi.value);
    } 
    return console.log(...nameList.names);
  },

  size : ()=>{
    if(this.head === null){
      return 0;
    }
    let counter = this.head;
    let i = 0;
    while(counter !== null){
      counter = counter.next;
      i++;
    }
    return i;
  },

  isEmpty : () => {
    if(this.head === null){
      return true;
    }else{
      return false;
    }
  }

};

module.exports = STORE; 