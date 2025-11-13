let todos = [
  { id: 1, text: "Start coding for WorkReq4  ⌨️🎧💭" },
  { id: 2, text: "Understand the code and celebrate progress 🤓💡✨" },
  { id: 3, text: "Complete WorkReq4 ✔️🏁" },
  { id: 4, text: "Upload and submit before the deadline ⌛" },
  { id: 5, text: "Take a well-deserved break 🍪🧋🤎" }
];

// DOM elements
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

// Create todo element
function createTodoElement(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  
  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = todo.text;
  
  const del = document.createElement("button");
  del.className = "delete-button";
  del.textContent = "";
  del.addEventListener("click", () =>     deleteTodo(todo.id));
  li.append(span, del);
  
  return li;
}

// Render todos
function renderTodos() {
  todoList.innerHTML = "";
  // Show message when list is empty – for better user experience :)
  if (todos.length === 0) {
    const emptyMsg = document.createElement("li");
    emptyMsg.className = "todo-item";
    emptyMsg.textContent = "Nothing here yet 👀 Add a new to-do!";
    todoList.appendChild(emptyMsg);
    return;
  }
  todos.forEach((todo) => todoList.appendChild(createTodoElement(todo)));
}

// Add todo
function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;
  
  const newTodo = { id: Date.now(), text };
  todos.push(newTodo);
  
  todoInput.value = "";
  todoInput.focus();
  renderTodos();
}

// Delete todo
function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  renderTodos();
}

// Event listeners
addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (e) =>
  {
    if (e.key === "Enter") addTodo();
  }
);

// Initial render
renderTodos();