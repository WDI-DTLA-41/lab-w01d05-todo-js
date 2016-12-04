console.log("Linked")

// Function to determine when user presses enter
var addTask = function (event){
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
    // newLi.addEventListener('click', deleteTask);

    // Collect all span items in the todo list
    var todoItems = document.querySelectorAll('.remove');

    // iterate through array of todo items and add an event
    for (var i = 0; i < todoItems.length; i++){
      todoItems[i].addEventListener('click',deleteTask);
    };

    var tasks = document.querySelectorAll('.todo');
    for (var i = 0; i < tasks.length; i++){
      tasks[i].addEventListener('click',markTaskCompletionState);
    };
    /// EXPERIMENTAL // for completed tasks

    /// END Experimental ///
  };
};

//Get input element and add Event Listener
var inputArea = document.querySelector('input');
inputArea.addEventListener('keypress', addTask);


//Remove Task
var deleteTask = function (){
  console.log('clicked. will remove')
  this.parentNode.remove();
};

// Mark task as completed or not complete
var markTaskCompletionState = function (){
  console.log('set to complete');
  if(this.classList.contains('complete')){
        console.log('it is completed. removing complete');
        this.classList.remove('complete')
      }
  else {this.classList.add('complete')};
};


/// EXPERIMENTAL - this works.
// var firstOne = document.querySelector('.remove');
// firstOne.parentNode;
// firstOne.parentNode.remove();
/// END OF EXPERIMENTAL




