//   its what we have in our html 
var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
// var input1 = document.getElementById('input1');
var dropdown = document.getElementById('dropdown'); 
document.body.style.backgroundColor = 'pink';
var textColor;



//     when you add words  
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  var textColor =dropdown.value;
  todo.innerHTML += '<div style="color:' + textColor + '">' + text + '</div>';
  evt.preventDefault();
}, false);


//    it removes the texts
todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  evt.preventDefault();
  
  if(tar.style.textDecoration === "line-through"){
      tar.parentNode.removeChild(tar);
  }else{
    tar.style.textDecoration = "line-through"
  }
  
}, false);