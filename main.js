var toDoList = document.querySelector('.todos');
var input = document.querySelector('.new-todo');
var completedNumber = document.querySelector('#completed-number');
var totalNumber = document.querySelector('#total-number');
var body = document.querySelector('body');
// var button = document.querySelector('button');



var handleInput = function(event) {
  if (event.keyCode === 13 && input.value !== "") {
    var toDoItem = document.createElement('li');
    toDoItem.addEventListener('click', completeTask);
    toDoItem.addEventListener('click', removeItem);
    toDoList.appendChild(toDoItem).innerHTML = event.target.value + '<span id="x">x</span>';
    event.target.value = '';
  }
}

input.addEventListener('keypress', handleInput);

var completeTask = function(event) {

  if (event.target.classList.contains('complete')) {
    event.target.classList.remove('complete');
  } else {
    event.target.classList.add('complete');
  }
}

// Remove item when clicking x - only if target (span) is not equal
// to currentTarget (li).  This way remove only occurs when clicking
// child of li (span) and not when clicking li
var removeItem = function(event) {
  if (event.target !== event.currentTarget) {
    event.target.parentNode.remove();
  }
}


var counter = function(event) {
  completedNumber.textContent = document.querySelectorAll('.complete').length;
  totalNumber.textContent = toDoList.children.length;
}

body.addEventListener('keypress', counter);
body.addEventListener('click', counter);

// var listItems = toDoList.childNodes


// var clearAll = function(event) {
//   // var listItem = document.querySelector('li');
//   // for (var i=0; i<listItems.length; i++) {
//   //   toDoList.removeChild(listItem);
//   // }
//   toDoList.
// }

// button.addEventListener('click', clearAll);
