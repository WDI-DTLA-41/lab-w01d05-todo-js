console.log("Linked")

// Function to determine when user presses enter
var addTask = function (event){
  if (event.keyCode === 13){
    if (event.target.value !== ""){
      // console.log(event);
      // console.log(event.target.value);
      console.log("User Pressed Enter");
      // console.log('<li>' + event.target.value + '</li>');
      // Create new List Item
      var newLi = document.createElement("li")

      // Add class to new List Item
      newLi.className='todo'

      // Add span and User's text
      newLi.innerHTML = '<span class="remove">x</span>' + ' ' + event.target.value;

      // Clear our input box
      event.target.value = '';

      // Get the ToDo List unOrdered List
      var todoList = document.querySelector('ul');

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
        tasks[i].addEventListener('dblclick',markTaskImportant);
      };
    /// EXPERIMENTAL // for important tasks
    // Game Score Keeping
    /// END Experimental ///
    }
    else{alert("Enter Todo")}
  };
};


//Remove Task
var deleteTask = function (){
  console.log('clicked. will remove')
  this.parentNode.remove();
};

// Completed Task Tracking
completedTaskCount = 0;
var completedTaskElement = document.createElement('div');
completedTaskElement.innerHTML = completedTaskCount;
completedTaskElement.setAttribute('Id', 'currentCompletedTaskCount');
var tasksCompleted = document.getElementById('tasks-completed');
tasksCompleted.appendChild(completedTaskElement);

// Add Completed Task to Tally Function
var addScore = function (tally) {
  var cCompletedTaskCount = document.getElementById('currentCompletedTaskCount');
  completedTaskCount += tally;
  cCompletedTaskCount.innerHTML = completedTaskCount;

};

// Remove Completed Task to Tally Function
var removeScore = function (tally) {
  var cCompletedTaskCount = document.getElementById('currentCompletedTaskCount');
  completedTaskCount -= tally;
  cCompletedTaskCount.innerHTML = completedTaskCount;

};

// Mark task as completed or not complete
var markTaskCompletionState = function (){
  console.log('set to complete');
  if(this.classList.contains('complete')){
        console.log('it is completed. removing complete');
        this.classList.remove('complete');
        removeScore(1);
  } else {
    this.classList.add('complete');
    addScore(1);
    // this.classList.toggle('complete');
    // var todoList = document.querySelector('ul');
    // todoList.appendChild(this)
  };
};

// function to highlight important tasks
var markTaskImportant = function (){
  console.log("Mark as Important");
  if(this.classList.contains('important')){
    console.log('already marked as important');
    this.classList.remove('important');
  } else {
    this.classList.add('important')
  };
};


/// EXPERIMENTAL
// Tally of how many tasks there are and how many are completed
//var taskCount = function (){}

// var firstOne = document.querySelector('.remove');
// firstOne.parentNode;
// firstOne.parentNode.remove();
/// END OF EXPERIMENTAL

//Get input element and add Event Listener
var inputArea = document.querySelector('input');
inputArea.addEventListener('keypress', addTask);


