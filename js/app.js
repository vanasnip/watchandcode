/*
 * V1 Requirements
 *
 */

// *  It should store the todos array on an object

var todos = {
  list : ['item 1','item 2','item 3','item 4'],
// *  It should have a displayTodo method 
displayTodo: function (){
  console.log('Ivano\'s',this.list);
},
// *  it should have a addNewTodo method
addNewTodo: function (item){
  this.list.push(item);
  this.displayTodo();
},
//*  It should have a changeTodo method
changeTodo:function (key,item){
  this.list[key] = item; 
this.displayTodo();
},
//*  It should have a deleteTodo method 
deleteTodo:function (key){
  this.list.splice(key,1);
this.displayTodo();
}};

todos.displayTodo();
todos.addNewTodo('item 5');
todos.changeTodo(3,'item four');
todos.deleteTodo(4);

