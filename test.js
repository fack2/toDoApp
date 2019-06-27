
var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) { 
  t.pass(); 
  t.end();
});

 test('add new to do item ', function(t){

   var actual = logic.addTodo([
    { id: -3, description: 'first todo',done:false },
    { id: -2, description: 'second todo' ,done:false},
    { id: -1, description: 'third todo',done:false },] , 
    { id: -4, description: 'first todo',done:false })
  var expected = [
  { id: -3, description: 'first todo',done:false },
  { id: -2, description: 'second todo' ,done:false},
  { id: -1, description: 'third todo' ,done:false},
  { id: -4, description: 'first todo' ,done:false}] ;
  console.log(actual+"actual\n");
  console.log(expected+"expected\n");
  t.deepEqual(actual,expected,"the item should add to the list");
  t.end();

 })
 

 test('delete  todo item ', function(t){

  var actual = logic.deleteTodo([
   { id: -3, description: 'first todo',done:false },
   { id: -2, description: 'second todo',done:false },
   { id: -1, description: 'third todo',done:false },] , 
   -3)
 var expected = [

 { id: -2, description: 'second todo',done:false },
 { id: -1, description: 'third todo' ,done:false},
 ] ;
 console.log(actual+"actual\n");
 console.log(expected+"expected\n");
 t.deepEqual(actual,expected,"the to do item should deleted");
 t.end();

})


test('   mark todo item ', function(t){

  var actual = logic.markTodo([
   { id: -3, description: 'first todo',done:false },
   { id: -2, description: 'second todo',done:false },
   { id: -1, description: 'third todo',done:false },] , 
   -3)
 var expected = [
  { id: -3, description: 'first todo',done:true },
 { id: -2, description: 'second todo',done:false },
 { id: -1, description: 'third todo' ,done:false},
 ] ;
 console.log(actual+"actual\n");
 console.log(expected+"expected\n");
 t.deepEqual(actual,expected,"the to do item should be mark");
 t.end();

})


test('sortTodos', function(t) {
  var arr = [ 
    { id: -1, description: 'third todo', done:true },
    { id: -2, description: 'second todo', done:true },
    { id:  0, description: 'zero todo', done:false },
  ];
  var actual=logic.sortTodos(arr,function(a, b){return a['description'] > b['description']});
  var expected = [ 
    
    { id: -2, description: 'second todo', done:true },
    { id: -1, description: 'third todo', done:true },
    { id:  0, description: 'zero todo' , done:false},
  ];
 console.log(a[0]['description']+"\n");
  console.log(b[0]['description']+"\n");
  console.log(v[0]['description']+"\n");
  t.deepEqual(actual,expected,"the to do list should be sort");  
 
  t.end();
});
