/* eslint-disable no-console */
const LinkedList = require('../../linkedList/linkedList');
const STORE = require('../store/store');

const {arrayContent , names} = STORE;

const log = console.log;

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

log(addTo(names.tauhida));

const remove = (itemToRemove) =>{
  const SSL = addTo(names.tauhida);

  SSL.remove(itemToRemove);

  return SSL;
};

