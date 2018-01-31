<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Exercise</title>
    <style>
        div {
          width: 50px;
          height: 50px;
          display: inline-block;
        }
        .brown{
          background-color: brown;
        }
        .green{
          background-color: green;
        }
        .blue{
          background-color: blue;
        }
        .purple{
          background-color: purple;
        }
        .yellow{
          background-color: yellow;
        }
        .car1 {
         background-color: #8C9C12;
        }
        .car2 {
         background-color: #1DA788;
        }
        .car1, .car2 {
            margin-left: 0;
        }
    </style>
</head>
<body>
    <h1 id="change_heading">Change Me!</h1>
    SELECTED COLOR <span class="selected">None!</span>
    <section>
        <div class="brown"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="yellow"></div>
    </section>
    
    <!-- this is race for assignment part II-->
    <h2>Race for gaming!</h2>
    <button>Start the race!</button>
    <br>
    <div class="car1"></div>
    <br>
    <div class="car2"></div>
    
    <!--adding form newTodoForm-->
    <h3>This is task!!</h3>
    <ul id='todoList'></ul>
    <form action='#' id='newTodoForm'>
    <label for ='task'>Task:</label>  
    <input type='text' name='task' id='task' autofocus>
    <input type='submit' value='Add Todo'>
    </form>
    
    
    <scrip>console.log('--Exercise Part I--');
/*console.log('//1. add code using window.onload or eventListener');
//1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded
//using window.onload
document.addEventListener('DOMContentLoaded', function() {
  var changeHead = document.getElementById('change_heading');
console.log('//2. replace change me to Arsyad');  
  //replace the text "Change me" with "Hello World!".
  changeHead.innerText = 'Arsyad is my Boy!';
  //using addEventListener
  changeHead.addEventListener('click', function() {
    alert('Lets do it my boy!');
  });
});
//3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
console.log('//3 alert to div')
var listBox = document.querySelectorAll('div');
for (var i=0; i<listBox.length; i++){
  listBox[i].addEventListener('click', function (event) {
    alert('You just click this box!' + event.target.innerText);
  });
}

//4.Create a new div element.
console.log('//4. create div element');
var createDiv = document.createElement('div');
console.log(createDiv);
//5. Give your new div a class of purple and style it so that it has a background color of purple.
//6. Append your new div to the page to the section tag.
console.log('//6 tag new div to purple class'); 
var addClass = document.querySelector('section');
console.log(addClass.appendChild(createDiv).classList); //return classList before
console.log('//5 new div to classList in purple element');
console.log(addClass.appendChild(createDiv).classList.add('purple')); //undefined
console.log(addClass.appendChild(createDiv).classList); //return classList after
//cant enter alert looping before due tree behaviour*/

//1.Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded
window.onload = function () {
//2.Replace the text "Change me" with "Hello World!".
var change = document.getElementById('change_heading');
  change.innerText = 'Hy My boy Arsyad!';
//3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
var section = document.querySelector('section');
section.addEventListener('mouseover', function(event){
  var sectionrColor = document.querySelector('.selected');
  sectionrColor.innerText = event.target.className;
});
//4.Create a new div element.
var newDiv = document.createElement('div');
//5. Give your new div a class of purple and style it so that it has a background color of purple.
console.log(newDiv.className = 'purple');
//6. Append your new div to the page to the section tag.
console.log(section.appendChild(newDiv));


console.log('--Exercise Part II--');
//1. Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"
//buat selector untuk yg mw dituju (button)
  var button =  document.querySelector('button');
//buat selector untuk yg mw dituju (class car1)
  var car1 = document.querySelector('.car1');
//buat selector untuk yg mw dituju (class car2)
  var car2 = document.querySelector('.car2');
//var style marginLeft  
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;

//buat function reset
  function reset (car1, car2) {
    clearTimeout (car1.timer);
    clearTimeout (car2.timer);
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    button.disabled = false;
  }

//buat click using addEventListener
  button.addEventListener('click', function(event){
  button.disabled = true;
  
//buat setInterval di class car1
  car1.timer = setInterval(function () {
    car1.style.marginLeft = parseInt (car1.style.marginLeft) + Math.random () * 60 + 'px';
    if (parseInt(car1.style.marginLeft) > window.innerWidth){
    alert('Hy Arsyad, first car is wins!!!');
    reset(car1, car2);
    }
  },60);

//buat setInterval di class car2
  car2.timer = setInterval(function () {
    car2.style.marginLeft = parseInt (car2.style.marginLeft) + Math.random () * 60 + 'px';
    if (parseInt(car2.style.marginLeft) > window.innerWidth){
    alert('Hy Arsyad, second car is wins!!!');
    reset(car1, car2);
    }
  },60);
  
}); //closed bracket addEventListener click for exercises part II

console.log('--Exercise Part III--');
//1. Add a new todo (by submitting a form)
  var todoForm = document.getElementById('newTodoForm');
  var todoList =document.getElementById('todoList');

  //retrieve from localStorage (this is number for exercises 4)
  var savedTodos = JSON.parse(localStorage.getItem('todos')) || [] ;
  for (var i=0; i<savedTodos.length; i++){
    var newTodo = document.createElement('li');
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = 'line-through';
    }
    todoList.appendChild(newTodo);
  }
  
  todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  /*var removeButton = document.createElement('button');
  removeButton.innerText = 'X';*/
  
  var newTodo = document.createElement('li');
  //newTodo.innerText = document.getElementById('task').value;
  
  //continue to exercises number 4 
  var taskValue = document.getElementById('task').value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  
  todoList.appendChild(newTodo);
  //newTodo.appendChild(removeButton);
  
  todoForm.reset();
 
  //continue to exercises number 4 
  //save to local localStorage
  savedTodos.push({task: newTodo.innerText, isCompleted:false});
  localStorage.setItem('todos', JSON.stringly(savedTodos));
  }); 
  
  todoList.addEventListener('click', function (event) {
    //2. Mark a todo as completed (cross out the text of the todo)
    /*if (event.target.tagName.toLowerCase() === 'li') {
      event.target.style.textDecoration = 'line-through';
    }
    //3.Remove a todo
    else if (event.target.tagName.toLowerCase() === 'button')
      event.target.parentNode.remove();*/
      
    //continue to exercises number 4 
    var clickedListItem = event.target;
    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = 'line-through';
      clickedListItem.isCompleted = true;
    }
    else {
      clickedListItem.style.textDecoration = 'none';
      clickedListItem.isCompleted = false;
    }
    
    //continue to exercises number 4 
    //breaks for duplicates - another option is to have dynamic IDs 
    for (var i=0; i<savedTodos.length; i++){
      if (savedTodos[i].task === clickedListItem.innerText){
        savedTodos[i].isCompleted = clickedListItem.isCompleted;
        localStorage.setItem('todos', JSON.stringly(savedTodos));
      }
    }
  }); 

  //4. Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete!

}; //close bracket for window.onload</script>
</body>
</html>
