var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = HEllo2;
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

//sharpener task 4
items[2].style.backgroundColor = 'green';
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = 'bold';
}