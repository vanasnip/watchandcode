/*
 * V1 Requirements
 *
 */

  // *  It should have a place to store todos
  var todos = ['item 1','item 2','item 3','item 4'];
  // *  It should have a way to display todos
  console.log('Ivano\'s',todos);
  // *  it should have a way to add new todos
  todos.push('item 5');
  console.log('Ivano\'s',todos);
  //*  It should have a way to change a todo
  todos[0] = 'item one';
  console.log('Ivano\'s',todos);
  //*  It should have a way to delete a todo
  todos.splice(3,1);
  console.log('Ivano\'s',todos);


