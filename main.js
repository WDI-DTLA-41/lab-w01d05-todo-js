// adds input field's text content as new list item

var input = document.querySelector('.new-todo');

var addItem = function(event) {
  if (event.keyCode === 13){
    var li = document.createElement('li');
    li.classList.add('todo');
    var newLI = document.body.querySelector('ul').appendChild(li);
    newLI.innerHTML = '<span class="remove">x</span>' + ' ~ ' + event.target.value;
    event.target.value = '';
  };




};
input.addEventListener('keyup', addItem);


// remove list item when span 'x' is clicked
var ul = document.querySelector('.todos');
var x = document.querySelector('.remove');

ul.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'span') {
    event.target.parentNode.remove();
  }
});

ul.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    event.target.classList.toggle('complete');
  }
});



  // show number of todos completed out
  // of number of todos left to complete
var counter = function(){
    var tasks = document.querySelectorAll('li').length;
    var completed = document.querySelectorAll('.complete').length;
    document.querySelector('h2').textContent = "you've completed " + completed + '/' + tasks + ' task(s)!';
  };

  document.body.addEventListener('keyup', counter);
  document.body.addEventListener('click', counter);
  // var tasks = document.body.querySelector('li');
  // var completed = document.body.querySelector('.complete')
