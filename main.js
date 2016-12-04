var toDoList = document.querySelector('.todos');
var input = document.querySelector('.new-todo');

var handleInput = function(event) {

  if (event.keyCode === 13 && input.value !== "") {
    var toDoItem = document.createElement('li');
    toDoItem.addEventListener('click', completeTask);
    toDoItem.addEventListener('click', removeItem);
    toDoList.appendChild(toDoItem).innerHTML = event.target.value + '<span>x</span>';
    event.target.value = '';
  }
  return toDoItem;
}

input.addEventListener('keypress', handleInput);

var completeTask = function(event) {
  event.target.classList.add('complete');
}

// Remove item when clicking x - only if target (span) is not equal
// to currentTarget (li).  This way remove only occurs when clicking
// child of li (span) and not when clicking li
var removeItem = function(event) {
  if (event.target !== event.currentTarget) {
    event.target.parentNode.remove();
  }
}

