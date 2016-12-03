console.log("hello");


// ### When a user enters text into 'input.new-todo' and hits enter
// - [ ] render the text as a new 'li'
// - [ ] the 'li' should contain the value from 'input.new-todo'
// - [ ] the 'li' should have a class of "todo"
// - [ ] the 'li' should contain a 'span' with a class of 'remove' and the text content 'x'
// - [ ] Append the 'li' to 'ul.todos'

var toDoList = document.querySelector('.todos');
var input = document.querySelector('.new-todo');
var newItem = document.createElement('li');

var createLi = function() {
  return document.createElement('li');
}

var handleInput = function(event) {

  if (event.keyCode === 13) {
    toDoList.appendChild(createLi()).textContent = event.target.value;

    //reset input text box
    event.target.value = '';
  }
  return;
}

input.addEventListener('keypress', handleInput);
