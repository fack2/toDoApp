// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd
var idCounter = 0;

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  
  //cloneArrayOfObjects will create a copy of the todos array 
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },
  
  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat 
    var arr= this.cloneArrayOfObjects(todos);
    arr.push(newTodo);
    return arr;
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var arr =this.cloneArrayOfObjects(todos);
    var i=0 ;
    var a=[];
    for(i;i<arr.length ;++i)
    { if(arr[i]['id']!=idToDelete)
    a.push(arr[i]);}
    return a;

  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    // var arr =  todos.map(x=>{
    //   if(x['id']==idToMark)
    //   x['done']=!x['done'];
    //   return arr ; 

    // })
    // return arr ;
    var arr =this.cloneArrayOfObjects(todos);
    var i=0 ;

    for(i;i<arr.length ;i++)
    { if(arr[i]['id'] === idToMark) 
    arr[i]['done'] = !(arr[i]['done']);
      }
          return arr; 
    



  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sorta
    var arr =this.cloneArrayOfObjects(todos);
    arr.sort(sortFunction);
    return arr ;

  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
