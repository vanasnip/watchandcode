/*
 * V1 Requirements
 *
 */
// .displayTodos should show .todoText
// .displayTodos should tell you if todos is empty
// .displayTodos should show completed 


// *  It should store the todoList array on an object

var todoList = {
  todos : [
    {
      todoText: 'item 1',
      completed:false
    },
    {
      todoText: 'item 2',
      completed:false
    },
    {
      todoText: 'item 3',
      completed:false
    },
    {
      todoText: 'item 4',
      completed:false
    }
  ],
  // *  It should have a displayTodo method 
  displayTodo: function (){
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
    this.displayTodo();
  },
  //*  It should have a changeTodo method
  changeTodo:function (key,item){
    this.todos[key].todoText = item; 
    this.displayTodo();
  },
  //*  It should have a deleteTodo method 
  deleteTodo:function (key){
    this.todos.splice(key,1);
    this.displayTodo();
  },
  toggleCompleted: function(key){
    this.todos[key].completed = !this.todos[key].completed;
    //  this.displayTodo();
  },
  toggleAll: function(){
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
    this.displayTodo();
  }};
// todoList.displayTodo();
  //todoList.addNewTodo('item 5');
  //todoList.changeTodo(3,'item four');
  //todoList.deleteTodo(2);
// todoList.toggleCompleted(1);
