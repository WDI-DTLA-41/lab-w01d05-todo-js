// ### When a user enters text into 'input.new-todo' and hits enter
// - [x] render the text as a new 'li'
// - [x] the 'li' should contain the value from 'input.new-todo'
// - [x] the 'li' should have a class of "todo"
// - [x] the 'li' should contain a 'span' with a class of 'remove' and the text content 'x'
// - [x] Appdn the 'li' to 'ul.todos'

var input = document.querySelector('.new-todo');

var createTodo = function(event) {
  var newTodo = event.target.value;
  var todoList = document.querySelector('.todos');
  var newListItem = document.createElement('li');

  if (event.keyCode === 13) {
    newListItem.className = 'todo';
    todoList.appendChild(newListItem);
    newListItem.textContent=newTodo;
    var children = todoList.children.length + 1;
    newListItem.setAttribute("id", "element"+children);
    todoList.appendChild(newListItem);
    event.target.value = '';
  }
  // newListItem.innerHTML=newTodo + '<span class="remove"> x</span>';
}


// ### When a user clicks on a todo's span's "x"
// - [ ] remove the todo from the DOM




// ### When a user click's on the todo text
// - [ ] add or remove the class "complete"
// - [ ] "complete" should add a line through the text

var clickOn = function(event) {
  var listItem = event.target;
  listItem.className = 'complete';
  var completeClass = document.querySelectorAll('complete')
  completeClass.style.textDecoration = 'line-through';
}

var clickOff = function(event) {
  var listItem = event.target;
  newListItem.className = 'todo';
}


var checkList = function(event) {

  if (event.target.className === 'todo'){
    clickOn();
  } else if (event.target.className === 'complete'){
    clickOff();
  }
}

var newListItem = document.createElement('li');
input.addEventListener('keyup', createTodo);
newListItem.addEventListener('click', checkList);
