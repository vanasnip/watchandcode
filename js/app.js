/*
 * V8 Requirements
 *
 */

// it should have working control for .addTodo
// it should have working control for .changeTodo
// it should have working control for .deleteTodo
// it should have working control for .toggleCompleted

var todoList = {
  todos : [],
  // *  It should have a displayTodos method 
  displayTodos: function (){
    var allT = this.todos;
    var len = allT.length;
    if(len < 1){
      console.log('todos are empty');
    } else {
      console.log('My todo list:');
      for(var i=0;i<len;i++){
        var todo = allT[i];
        var comp;
        if(todo.completed){
          comp = 'x';
        } else {
          comp = ' '; 
        }
        console.log(todo.todoText+' ['+comp+']');
      }
    }
  },
  // *  it should have a addNewTodo method
  addNewTodo: function (todoText){
    this.todos.push({
      todoText : todoText,
      completed : false
    });
    this.displayTodos();
  },
  //*  It should have a changeTodo method
  changeTodo:function (key,item){
    this.todos[key].todoText = item; 
    this.displayTodos();
  },
  //*  It should have a deleteTodo method 
  deleteTodo:function (key){
    this.todos.splice(key,1);
    this.displayTodos();
  },
  toggleCompleted: function(key){
    this.todos[key].completed = !this.todos[key].completed;
    this.displayTodos();
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
      this.displayTodos();
    }
  }
};
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
}
var handlers = {
  display: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
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
