var form = document.getElementById('my-form');

// form submit event
form.addEventListener('submit',
  addItem);

function addItem(e) {
  e.preventDefault();

  //get input value
  var newName = document.getElementById('name').value;
  var newEmail = document.getElementById('email').value;

  //put in local storage
  // localStorage.setItem("name", newName);
  // localStorage.setItem("email", newEmail);


  //create new li element

  var data = document.createElement('li');

  // Add class

  data.className = 'list-group-item'

  //add text node with input value

  data.appendChild(document.createTextNode(newName));
  data.appendChild(document.createTextNode('  ' + newEmail));
  //append child
  form.appendChild(data);

  let infoObj = {
    name: newName,
    email: newEmail
  };

  let infoObj_serialized = JSON.stringify(infoObj);

  localStorage.setItem(infoObj.email, infoObj_serialized);

  let infoObj_deserialized = JSON.parse(localStorage.getItem("infoObj"))

}