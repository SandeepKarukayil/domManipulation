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

var secondItem = document.querySelectorAll('.list-group-item');
secondItem[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'green';
}