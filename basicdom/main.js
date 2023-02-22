var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById("filter");


//form submit event

form.addEventListener('submit',
  addItem);

//delete event 
itemList.addEventListener('click', removeItem);
//Filter event 
filter.addEventListener('keyup', filterItems);

//addItem

function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('description').value;

  //create new li element

  var li = document.createElement('li');

  // Add class

  li.className = 'list-group-item'

  //add text node with input value

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode('  ' + newItem1))

  //Create a delete button 
  var deleteBtn = document.createElement('button');

  //add classes to delete button 
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Append Text node to delete 
  deleteBtn.appendChild(document.createTextNode('X'));
  //append button to li
  li.appendChild(deleteBtn);
  //append li to list 
  itemList.appendChild(li);


  // create editBtn
  var editBtn = document.createElement('button');
  //add class to edit button 
  editBtn.className = 'btn btn-success btn-sm float-right edit'
  //append text node to edit 
  editBtn.appendChild(document.createTextNode('edit'));
  //append editbutton to li
  li.appendChild(editBtn);
  // append li to list 
  itemList.appendChild(li);
}

//removeItem
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter items
function filterItems(e) {
  //convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Getting All LI Elements
  let items = itemList.querySelectorAll("li");
  items.forEach((item, i) => {
    const itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

