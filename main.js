console.log("Linked")

// Function to determine when user presses enter
var handleEnter = function (event){
  if (event.keyCode === 13){
    //console.log(event);
    console.log(event.target.value);
    console.log("User Pressed Enter");
    console.log('<li>' + event.target.value + '</li>');

    var newLi = '<li class="todo"><span class="remove">x</span>' + event.target.value + '</li>';
    // Get the unOrdered List
    var uList = document.querySelector('ul')
    uList.appendC

  };
};

//Add Event Listener to input element
var inputArea = document.querySelector('input');
inputArea.addEventListener('keypress', handleEnter);
