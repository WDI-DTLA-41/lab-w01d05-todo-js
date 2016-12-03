var toDoList = document.querySelector('.todos');
var input = document.querySelector('.new-todo');

// Create to do items

var createLi = function() {
  var toDoItem = document.createElement('li');
  toDoItem.addEventListener('click', completeTask);
  return toDoItem;
}

var handleInput = function(event) {

  if (event.keyCode === 13) {
    toDoList.appendChild(createLi()).textContent = event.target.value;

    //reset input text box
    event.target.value = '';
  }
}

input.addEventListener('keypress', handleInput);

// var toDoItem = document.querySelector('li')

var completeTask = function(event) {
  event.target.classList.add('complete');
}

// toDoItem.addEventListener('click', completeTask);
