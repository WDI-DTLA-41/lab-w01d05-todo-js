console.log("Linked")

// Function to determine when user presses enter
var addTask = function (event){
  if (event.keyCode === 13){
    if (event.target.value !== ""){

      // Create new List Item
      var newLi = document.createElement("li")
      // Add class to new List Item
      newLi.className='todo'
      // Add span and User's text
      newLi.innerHTML = '<span class="remove">x</span>' + ' ' + event.target.value;
      // Clear out input box
      event.target.value = '';
      // Get the ToDo List unOrdered List
      var todoList = document.querySelector('ul');
      // Append our new li to the todo List
      todoList.appendChild(newLi);


      // Collect all span items in the todo list
      var todoItems = document.querySelectorAll('.remove');
      // iterate through array of todo items and add the deleteTask event listener
      for (var i = 0; i < todoItems.length; i++){
        todoItems[i].addEventListener('click',deleteTask);
      };

      // Collect all to do items and add event listeners for marking completion state and importance
      var tasks = document.querySelectorAll('.todo');
      for (var i = 0; i < tasks.length; i++){
        tasks[i].addEventListener('click',markTaskCompletionState);
        tasks[i].addEventListener('dblclick',markTaskImportant);
      };
    /// EXPERIMENTAL // for important tasks
    //gets the count of todo items
document.getElementById('total-tasks').innerHTML= document.getElementById('taskList').getElementsByClassName('todo').length;

    /// END Experimental ///
    }
    else{alert("Enter Todo")}
  };
};


//Remove Task
var deleteTask = function (){
  console.log('clicked. will remove');
  this.parentNode.remove();
  document.getElementById('total-tasks').innerHTML= document.getElementById('taskList').getElementsByClassName('todo').length
};


// Completed Task Tracking
completedTaskCount = 0;
document.getElementById('tasks-completed').innerHTML= completedTaskCount;

// Add Completed Task to Tally Function
var addCTask = function (tally) {
  completedTaskCount += tally;
  document.getElementById('tasks-completed').innerHTML = completedTaskCount;

};

// Remove Completed Task to Tally Function
var removeCTask = function (tally) {
  completedTaskCount -= tally;
  document.getElementById('tasks-completed').innerHTML = completedTaskCount;

};


// Total Task Count
totalTaskCount = 0;
//document.getElementById('total-tasks').innerHTML=1234567890;

//gets the count of todo items
document.getElementById('total-tasks').innerHTML= document.getElementById('taskList').getElementsByClassName('todo').length


// Mark task as completed or not complete
var markTaskCompletionState = function (){
  console.log('set to complete');
  if(this.classList.contains('complete')){
        console.log('it is completed. removing complete');
        this.classList.remove('complete');
        removeCTask(1);
  } else {
    this.classList.add('complete');
    addCTask(1);
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

/// END OF EXPERIMENTAL

//Get input element and add Event Listener
var inputArea = document.querySelector('input');
inputArea.addEventListener('keypress', addTask);


