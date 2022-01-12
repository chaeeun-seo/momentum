// Deleting ToDos part 1

// problem : when I delete todos and refresh, they are not deleted b/c they're still on the localStorage
// everytime I delete todo, I don't update localStorage >> has to change

// localStorage is not a database
// toDos array is a database
// localStorage is a place where we  copy the toDos array

// don't know which todo text to remove from toDos
// I want to give todos a sort of array >> instead of text, I want objects
// ex. [{id:1, text:"drink"}]

// the way to make random id
// Date.now() : function that gives ms

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// able to get li's id before we delete li

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

// paintToDo function gets newTodoObj as an argument
// make li's id same as newTodoObj's id
// set span's innerText as newTodoObj's text

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// instead of pushing just text to the toDos, I want to push objects
// give newTodoObj as an argument to painToDo function

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
