// Saving ToDos

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// every time newTodo is painted, push that text into toDos array
const toDos = [];

// JSON.stringify(js object)
// ex. JSON.stringify({name:"happy"})
// take any js object and turn that js object into string
// if we use JSON.stringify, I can save toDos as the shape of an array

// localStorage doesn't allow me to save arrays
// localStorage can only save text/string
// the only job of saveToDos is to save toDos

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// every time newTodo is painted, push that text into toDos array

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// problem : when we add some todos and refresh and add todos again, the localStorage is cleared and starts again
