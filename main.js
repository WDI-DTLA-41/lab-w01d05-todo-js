console.log("Linked")

// Function to determine when user presses enter
var handleEnter = function (event){
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

  };
};

//Add Event Listener to input element
var inputArea = document.querySelector('input');
inputArea.addEventListener('keypress', handleEnter);
