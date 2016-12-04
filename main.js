console.log ("linked!");

//input
var input = document.querySelector('input');
var handleKeypress = function(event) {
  console.log(event.target, event.currentTarget, event.keyCode);
}
input.addEventListener('keypress', handleKeypress);


// // render input as list
// // works but only adds single element to list
var inInput = document.querySelector('input');
var inReturn = document.querySelector('li');

var handleEnter = function(event) {
  if(event.keyCode === 13) {
    inReturn.textContent = event.target.value;
    event.target.classList.add('li');
  }
}

inInput.addEventListener('keyup', handleEnter)

// another attempt at adding new elements to list
// var list = document.document.getElementsByClassName('todo');
// var input = document.document.getElementsByClassName('new-todo').value;
// var entry = document.createElement('li');
// entry.appendChild(document.createTextNode(input));
// list.appendChild(entry);

