var input = document.querySelector('.new-todo');
var li = document.createElement('li');
var newLI = document.body.querySelector('ul').appendChild(li);

var addItem = function(event) {
  console.log(event.target, event.target.value, event.keyCode);
  if (event.keyCode === 13){
    newLI.textContent = event.target.value;
    event.target.value = '';
  }
}
input.addEventListener('keyup', addItem);
