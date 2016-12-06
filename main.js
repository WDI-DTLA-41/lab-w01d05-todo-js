// ### When a user enters text into 'input.new-todo' and hits enter
// - [x] render the text as a new 'li'
// - [x] the 'li' should contain the value from 'input.new-todo'
// - [x] the 'li' should have a class of "todo"
// - [x] the 'li' should contain a 'span' with a class of 'remove' and the text content 'x'
// - [x] Appdn the 'li' to 'ul.todos'
// ### When a user clicks on a todo's span's "x"
// - [x] remove the todo from the DOM



var input = document.querySelector('.new-todo');
var listItems = document.querySelector('ul');
var todoList = document.querySelector('.todos');
var createTodo = function(event) {
  var newTodo = event.target.value;
  var newListItem = document.createElement('li');
  var removeItem = function() {
  this.parentNode.remove();

}
  if (event.keyCode === 13) {
    newListItem.className = 'todo';
    var todoList = document.querySelector('.todos');
    todoList.appendChild(newListItem);
    newListItem.textContent=newTodo;
    var children = todoList.children.length;
    newListItem.setAttribute("id", children);
    todoList.appendChild(newListItem);
    event.target.value = '';
    newListItem.innerHTML='<span class="remove"> x </span>' + newTodo;
    var clickToRemove = document.querySelectorAll('.remove');
    for (var i = 0; i < clickToRemove.length; i++){
      clickToRemove[i].addEventListener('click', removeItem);

    }
  }

}


// attach eventListener after span is created or put it on a parent node (use classList.contains)

// ### When a user click's on the todo text
// - [x] add or remove the class "complete"
// - [x] "complete" should add a line through the text

var clickOn = function() {
  var listItem = event.target;
  listItem.className = 'complete';
  listItem.style.textDecoration = 'line-through';
}

var clickOff = function() {
  var listItem = event.target;
  listItem.className = 'todo';
  listItem.style.textDecoration = 'none';
}


var checkList = function() {
  console.log(event.target);
  var listItem = event.target;
  if (event.target.className === 'todo'){
    clickOn();
  } else if (event.target.className === 'complete'){
    clickOff();
  }
}

input.addEventListener('keyup', createTodo);
listItems.addEventListener('click', checkList);
