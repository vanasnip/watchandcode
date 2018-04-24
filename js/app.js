/*
 * V9 Requirements
 *
 */

// There should be an li element for every todo
// Each li element should contain .todoText
// Each li element should show .completed

var todoList = {
  todos : [],
  // *  it should have a addNewTodo method
  addNewTodo: function (todoText){
    this.todos.push({
      todoText : todoText,
      completed : false
    });
    
  },
  //*  It should have a changeTodo method
  changeTodo:function (key,item){
    this.todos[key].todoText = item; 
    
  },
  //*  It should have a deleteTodo method 
  deleteTodo:function (key){
    this.todos.splice(key,1);
    
  },
  toggleCompleted: function(key){
    this.todos[key].completed = !this.todos[key].completed;
    
  },
  toggleAll: function(){
    if (this.todos.length === 0){
      console.log('Your todo list is empty');
    } else {
      var allTrue = true;

      for(var i=0;i<this.todos.length;i++){
        var todo = this.todos[i];
        if(!todo.completed){
          allTrue = false;
          this.toggleCompleted(i);
        }
      }
      if (allTrue){
        for(var i=0;i<this.todos.length;i++) {
          this.toggleCompleted(i);
        }
      }
      
    }
  }
};
function elementFactory(elem,attr,appnd,todo){
  var newElem = document.createElement(elem);
  // Could have used document.querySelector('ul');
  var node = document.getElementById(appnd);
  attr.forEach(function(att){
    newElem.setAttribute(att.type,att.val);
  });
  var li_text = todo.todoText;
  var li_completed = todo.completed ? '{x}' : '{ }';
  
  var content = document.createTextNode(li_text+' '+li_completed);
  newElem.appendChild(content);
  node.appendChild(newElem);
  return newElem;
}
function drawTodoList(){
    var ulElem = 'todo-ul';
    var clearUl = document.getElementById(ulElem);
    clearUl.innerHTML = '';
  if(todoList.todos.length > 0){
    // each li  element containing 
    todoList.todos.forEach(function(todo){
      elementFactory(
        'li',
        [{type:'class',
          val:'todo'}],
        ulElem,
        todo
      );
    });
    // todoText and completed
  } 
}
(function(){
  var inputButtonLinkup = [
    {inputID:'add', btnID:'btn-add'},
    {inputID:'change-key', btnID:'btn-change'},
    {inputID:'change-text', btnID:'btn-change'},
    {inputID:'delete', btnID:'btn-delete'},
    {inputID:'toggle', btnID:'btn-toggle'}
  ];
  function link(input,btn){
    var myInput = document.getElementById(input);
    var myBtn = document.getElementById(btn);
    myInput.addEventListener('keyup', function(event){
      event.preventDefault();
      if(event.keyCode === 13){
        myBtn.click(); 
      }
    });
  }
  var input; var btn
  for(var i=0;i<inputButtonLinkup.length;i++){
    input = inputButtonLinkup[i].inputID;
    btn   = inputButtonLinkup[i].btnID;
    link(input,btn);
  }
}())
function getInputVal(id){
  return document.getElementById(id).value;
}
function clearInputVal(id){
  document.getElementById(id).value = '';
}
function valid(){
  var status = true;
  var items = arguments;
  for(var i=0;i<items.length;i++){
    if(items[i].length === 0){
      status = false
    } 
  }
  if(!status){ 
    console.log('Error: Input not valid, action aborted');
  } 
  return status;
}
function inputRunner(params){
  if (params.length === 2){ 
    var id = params[0];
    var method = params[1];
    var item = getInputVal(id);
    clearInputVal(id);
    if (valid(item)){
      if(id !== 'add'){item = parseInt(item);}

      todoList[method](item);
    }
  } else {
    var key = parseInt(getInputVal(params[0]));
    var textChange = getInputVal(params[1]);
    clearInputVal(params[0]);
    clearInputVal(params[1]);
    var method = params[2];
    if (valid(key,textChange)){
      todoList[method](key,textChange);
    }
  }
    drawTodoList(); 
}
var handlers = {
  toggleAll: function(){
    todoList.toggleAll();
    drawTodoList(); 
  },
  add: function(){
    inputRunner(['add','addNewTodo']);
  },
  change: function(){
    inputRunner(['change-key','change-text','changeTodo']);
  },
  delete: function(){
    inputRunner(['delete','deleteTodo']);
  },
  toggle: function(){
    inputRunner(['toggle','toggleCompleted']);
  },
}
