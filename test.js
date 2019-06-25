
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
  console.log(actual+"0000000\n");
  console.log(expected+"0000000\n");
  t.deepEqual(actual,expected,"xd");
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
 console.log(actual+"0000000\n");
 console.log(expected+"0000000\n");
 t.deepEqual(actual,expected,"xd");
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
 console.log(actual+"0000000\n");
 console.log(expected+"0000000\n");
 t.deepEqual(actual,expected,"xd");
 t.end();

})
