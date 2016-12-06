console.log ("linked!");

// create new list
var input = document.querySelector('.new-todo');               // <input>
var inReturn = document.querySelector('.todo');                // <ul>

var handleEnter = function(event) {
  if(event.keyCode === 13) {
    // create element
    var newElement = document.createElement("li");
    // add text to element, also works with textContent, changed to innerHTML
    newElement.innerHTML = "<span class='remove'>x</span>" + event.target.value;
    // append to parent
    inReturn.appendChild(newElement);
    //clears text box
    event.currentTarget.value = " ";


    // event listener for click on x
    newElement.addEventListener('click', removeItem);

  }
}

input.addEventListener('keyup', handleEnter)




// remove element when you press x
// find span
// click on span
// remove li


// attempt 1 ////////////////////////////////
var removeItem = function(event){
  if(event.target.classList.contains("remove")){
  // use event.target if clicking
  event.target.parentNode.remove();
  }
}
