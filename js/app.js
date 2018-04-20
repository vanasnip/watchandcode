/*
 * V1 Requirements
 *
 */

// *  It should have a store todos
var todos = ['item 1','item 2','item 3','item 4'];
// *  It should have a function to display todos
function displayTodo(){
  console.log('Ivano\'s',todos);
}
// *  it should have a function to add new todos
function addNewTodo(item){
  todos.push(item);
  displayTodo();
}
//*  It should have a function to change a todo
function changeTodo(key,item){
  todos[key] = item; 
displayTodo();
}
//*  It should have a function to delete a todo
function deleteTodo(key){
  todos.splice(key,1);
displayTodo();
}
displayTodo();
addNewTodo('item 5');
changeTodo(3,'item four');
deleteTodo(4);

