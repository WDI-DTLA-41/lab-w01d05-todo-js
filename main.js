console.log("Linked")

// Function to determine when user presses enter
var addTodoItem = function (event){
  if (event.keyCode === 13){
    //console.log(event);
    console.log(event.target.value);
    console.log("User Pressed Enter");
    console.log('<li>' + event.target.value + '</li>');

    // Create new List Item
    var newLi = document.createElement("li")

    // Add class to new List Item
    newLi.className='todo'

    // Add span and User's text
    newLi.innerHTML = '<span class="remove">x</span>' + ' ' + event.target.value;

    // Get the ToDo List unOrdered List
    var todoList = document.querySelector('ul')

    // Append our new li to the todo List
    todoList.appendChild(newLi);

    // Add Event Listener to remove Item // when text is clicked remove item
    // newLi.addEventListener('click', removeTodoItem);

    // Collect all span items in the todo list
    var todoItems = document.querySelectorAll('.remove');

    // iterate through array of todo items and add an event
    for (var i = 0; i < todoItems.length; i++){
      todoItems[i].addEventListener('click',removeTodoItem);
    };
    /// EXPERIMENTAL // for completed tasks
    var completedTasks = document.querySelectorAll('.todo');
    for (var i = 0; i < completedTasks.length; i++){
      completedTasks[i].addEventListener('click',markAsCompleted);
    };

    /// END Experimental ///
  };
};

//Add Event Listener to input element
var inputArea = document.querySelector('input');
inputArea.addEventListener('keypress', addTodoItem);


//Remove to do Item
var removeTodoItem = function (){
  console.log('clicked. will remove')
  this.parentNode.remove();
};

// Set task to completed
var markAsCompleted = function (){
  console.log('set to complete');
  this.className = "complete";
};


/// EXPERIMENTAL - this works.
// var firstOne = document.querySelector('.remove');
// firstOne.parentNode;
// firstOne.parentNode.remove();
/// END OF EXPERIMENTAL




