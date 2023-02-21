var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = HEllo2;
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

//sharpener task 4
// items[2].style.backgroundColor = 'green';
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = 'bold';
// }

// // getElementsBYtagname

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = Hello2;
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = 'bold';
// }

// sharpener task 5
// editing by classname
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'yellow';
// }
// // by changing background color by tag
// var li = document.getElementsByTagName('li');
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'pink';
// }

// // Query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"
// var item = Document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'
//Query Selector All

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';

// }


//Sharpener TASK  6

// 1.make 2nd item have green background color
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// // 2. make 3rd item invisible
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// var secondItem = document.querySelectorAll('.list-group-item');
// secondItem[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'green';
// }

//traversing the dom //
var itemList = document.querySelector('#items');
//parentNode property 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);


//parent Element property  - for most part can be used interchangeably 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

// child Nodes property it includes text nodes line breaks so dont use 
// // suggested not to use rather use children 
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild property 
// this also takes any text space or line breaks  so according to traversy its USELESS
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

// lastChild property 
// this also takes any text space or line breaks  so according to traversy its USELESS
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// SIBLINGS
// nextSibling
// gives text space or line break so again not used 
console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// gives text node so dont use
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// CREATING ELEMENTS AND INSERTING USING JS DOM 

// createElement

// create a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello'

// add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'Hello Div')

// create a text node
var newDivText = document.createTextNode('HEllo ')

// add text to div 
newDiv.appendChild(newDivText);

// to insert in dom

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1 ');

console.log(newDiv);

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';
// new

var newDiv2 = document.createElement('div');

newDiv2.className = 'hello'

newDiv2.id = 'hello2';

newDiv2.setAttribute('title', 'Hello Div')

var newDivText1 = document.createTextNode('HEllo ')

newDiv2.appendChild(newDivText1);


var container2 = document.querySelector('div ul  ');
var clock = document.querySelector("div li");

container2.insertBefore(newDiv2, clock);