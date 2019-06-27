// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var uncompletedToDos = document.getElementById("todo-container");
  var completedToDos = document.getElementById("markTodo-container");
  var addTodoForm = document.getElementById("add-todo");
  var sortList = document.getElementById("sortList");
  var sortListID = document.getElementById("sortListID");

  var state = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: true },
    { id: -1, description: "third todo", done: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    console.log(todo["done"]);

    var todoNode = document.createElement("li");
    //todoNode.innerHTML = "<span>" + todo.description + "</span>";
    var spannode = document.createElement("span");
    spannode.textContent = todo.description;
    todoNode.appendChild(spannode);

    // todoNode.innerHTML=todo.description;

    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    // deleteButtonNode.innerHTML = "Delete";
    deleteButtonNode.name = "deleteButton";
    deleteButtonNode.className = "far fa-trash-alt";
    deleteButtonNode.setAttribute("aria-label", "delete Button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement("button");
    markTodoButtonNode.name = "markTodoButton";
    markTodoButtonNode.setAttribute("aria-label", "mark Todo Button");

    if (todo["done"] == false) {
      //  markTodoButtonNode.innerHTML = "markTodo";
      markTodoButtonNode.className = "	fa fa-check-square";
    } else {
      //  markTodoButtonNode.innerHTML = "Unmark";
      markTodoButtonNode.className = "fa fa-minus-square";
    }
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
    var newState = todoFunctions.sortTodos(state, function(a, b) {
      return a["description"] > b["description"] ? 1 : -1;
    });

    update(newState);
  });

  sortListID.addEventListener("click", function(event) {
    event.preventDefault();
    // var sortFunction=
    var newState = todoFunctions.sortTodos(state, function(a, b) {
      return a["id"] > b["id"] ? 1 : -1;
    });

    update(newState);
  });
  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var desc = document.getElementById("todo").value;
      if (desc != "") {
        event.target;

        var newState = todoFunctions.addTodo(state, {
          id: todoFunctions.generateId(),
          description: desc,
          done: false
        });
        console.log(newState);
        update(newState);
      }
    });
  }

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
    uncompletedToDos.replaceChild(todoListNode, uncompletedToDos.firstChild);
    completedToDos.replaceChild(markedListNode, completedToDos.firstChild);
  };

  if (uncompletedToDos) renderState(state);
  if (completedToDos) renderState(state);
})();
