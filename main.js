console.log ("linked!");

// create new list
var input = document.querySelector('.new-todo');               // selects <input class= "new-todo">
var inReturn = document.querySelector('.todo');                // selects <ul class= "todo">

var handleEnter = function(event) {
  if(event.keyCode === 13) {
    // create element
    var newElement = document.createElement("li");
    // add text to element
    newElement.textContent = event.target.value;
    // append to parent
    inReturn.appendChild(newElement);
    event.currentTarget.value = " ";
  }
}

input.addEventListener('keyup', handleEnter)



















//input
// var input = document.querySelector('input');
// var handleKeypress = function(event) {
//   console.log(event.target, event.currentTarget, event.keyCode);
// }
// input.addEventListener('keypress', handleKeypress);


/// WORKS/////////////////////////////////////////////////
// render input as <li>, only adds single element to list
// var input = document.querySelector('input');
// var inReturn = document.querySelector('li');

// var handleEnter = function(event) {
//   if(event.keyCode === 13) {
//     inReturn.textContent = event.target.value;
//     event.target.classList.add('li');
//   }
// }

// input.addEventListener('keyup', handleEnter)
/// WORKS/////////////////////////////////////////////////




  /////////////////////
 // another attempt //
/////////////////////

// var handleEnter = function(event) {
//   if(event.keyCode === 13) {
//     var input = document.querySelector('.new-todo').value
//     var text = document.createTextNode(item)
//     var newItem = document.createElement('li')
//     newItem.appendChild(text)
//     document.querySelector('.todo').appendChild(newItem)
//   }
// }

// input.addEventListener('keyup', handleEnter)


