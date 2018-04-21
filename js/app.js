/*
 * V1 Requirements
 *
 */

// todotodos.addTodo should add objects
// todotodos.changeTodo should change the todoText property
// todotodos.toggleCompleted should change the completed property


// *  It should store the myToDos array on an object

var myToDos = {
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
    console.log('Ivano\'s',this.todos);
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
    this.displayTodo();
  }
};
myToDos.displayTodo();
myToDos.addNewTodo('item 5');
myToDos.changeTodo(3,'item four');
myToDos.deleteTodo(2);
myToDos.toggleCompleted(1);
