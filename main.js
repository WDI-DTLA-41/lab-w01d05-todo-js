console.log ("linked!");

//input
var input = document.querySelector('input');
var handleKeypress = function(event) {
  console.log(event.target, event.currentTarget, event.keyCode);
}
input.addEventListener('keypress', handleKeypress);


// render input as <li>, only adds single element to list
var inInput = document.querySelector('input');
var inReturn = document.querySelector('li');

var handleEnter = function(event) {
  if(event.keyCode === 13) {
    inReturn.textContent = event.target.value;
    event.target.classList.add('li');
  }
}

inInput.addEventListener('keyup', handleEnter)




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


