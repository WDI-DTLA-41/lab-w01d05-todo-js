var toDoList = document.querySelector('.todos');
var input = document.querySelector('.new-todo');
var body = document.querySelector('body');

var handleInput = function(event) {
  if (event.keyCode === 13 && input.value !== "") {
    var toDoItem = document.createElement('li');
    toDoItem.addEventListener('click', completeTask);
    toDoItem.addEventListener('click', removeItem);
    toDoList.appendChild(toDoItem).innerHTML = event.target.value + '<span id="x">x</span>';
    event.target.value = '';
  }
}

var completeTask = function(event) {
    event.target.classList.toggle('complete');
}

var removeItem = function(event) {
  if (event.target !== event.currentTarget) {
    event.target.parentNode.remove();
  }
}

var counter = function(event) {
  var completedNumber = document.querySelector('#completed-number');
  var totalNumber = document.querySelector('#total-number');
  completedNumber.textContent = document.querySelectorAll('.complete').length;
  totalNumber.textContent = toDoList.children.length;
}

input.addEventListener('keypress', handleInput);
body.addEventListener('keypress', counter);
body.addEventListener('click', counter);
