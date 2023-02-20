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
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'yellow';
}
// by changing background color by tag
var li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = 'pink';
}