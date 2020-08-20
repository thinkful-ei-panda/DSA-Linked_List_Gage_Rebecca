const LinkedList = require('../../linkedList/linkedList');
const STORE = require('../store/store');

const {arrayContent , names} = STORE;

const main = (data) => {

  const SSL = new LinkedList();

  let i = 0;
  while (i < data.length){
    SSL.insertFirst(data[i]);
    i++;
  }
  return SSL; 

};



// console.log(main(arrayContent));


const addTo = (data) =>{
  const SSL = main(arrayContent);

  SSL.insertFirst(data);

  return SSL;
};

console.log(addTo(names.tauhida));