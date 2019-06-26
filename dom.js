// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var container2 = document.getElementById("markTodo-container");
  var addTodoForm = document.getElementById("add-todo");
  var sortList = document.getElementById("sortList");

  var state = [
    { id: -2, description: "second todo", done: true },
    { id: -3, description: "first todo", done: false },
    { id: -1, description: "third todo", done: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    console.log(todo["done"]);

    var todoNode = document.createElement("li");
    todoNode.innerHTML = "<span>" + todo.description + "</span>";
    // todoNode.innerHTML=todo.description;

    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.innerHTML = "deleteButton";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement("button");
    if (todo["done"] == false) {
      markTodoButtonNode.innerHTML = "markTodo";
    } else markTodoButtonNode.innerHTML = "Unmark";
    markTodoButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markTodoButtonNode);

    // add classes for css

    return todoNode;
  };
  sortList.addEventListener("click", function(event) {
    event.preventDefault();
    // var sortFunction=
     var newState=todoFunctions.sortTodos(state,function(a, b){return (a['description']>b['description']?1:-1)});
     update(newState);

    // console.log(ll);
    // console.log(state[0]['description']+"000"+ll[0]['description']);
    // console.log(state[0]['description']<ll[1]['description']);
    // console.log(state);

  });
  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      //var description = '?'; //  ....
      event.preventDefault();
      var desc = document.getElementById("todo").value;
      event.target;
      // hint: todoFunctions.addTodo

      // var newState = []; // ?? change this!
      // update(newState);
      var newState = todoFunctions.addTodo(state, {
        id: todoFunctions.generateId(),
        description: desc,
        done: false
      });
      console.log(newState);
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");
    var markedListNode = document.createElement("ul");

    state.forEach(function(todo) {
      if (todo.done == false) todoListNode.appendChild(createTodoNode(todo));
      else markedListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
    container2.replaceChild(markedListNode, container2.firstChild);
  };

  if (container) renderState(state);
  if (container2) renderState(state);
})();
