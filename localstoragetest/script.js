/* console.log(localStorage);
localStorage.setItem('key','value');
console.log(localStorage);
var key = localStorage.getItem('key');
console.log(key);
var keyChanged = localStorage.removeItem('key');
console.log(keyChanged);
localStorage.clear();
console.log(localStorage); */

/* const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray = [];
localStorage.setItem('items', JSON.stringify(itemsArray)); //converts to string for front end
const dataCount = JSON.parse(localStorage.getItem('items')); //Converts to array elements

form.addEventListener('submit', function (e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    JSON.parse(localStorage.getItem('items')).forEach(item => {
          console.log(item);      
    });
});

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}; */

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const submitBtn = document.getElementById('submit-btn');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  const del = document.createElement('div');
  del.id = 'deleteButton';
  del.textContent = 'X';
  li.textContent = text;
  ul.appendChild(li);
  li.appendChild(del);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  /* input.value = ""; */
});

data.forEach(item => {
  liMaker(item);
});

const deleteBtn = document.getElementById('deleteButton');
console.log(deleteBtn);

deleteBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(e.target.id == 'deleteButton'){
        console.log('clicked');
    }
/*   localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  } */
}); 