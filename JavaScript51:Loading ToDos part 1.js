// Loading ToDos part 1

// problem : every time I refresh, toDos stay on the localStorage but don't show on the screen(todo list)

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// JSON.stringify(js object)
// ex. JSON.stringify({name:"happy"})
// take any js object and turn that js object into string
// if we use JSON.stringify, I can save toDos as the shape of an array

// JSON.parse()
// take string and turn it into live js object
// ex. JSON.parse("[1, 2, 3, 4]")

// localStorage doesn't allow me to save arrays
// localStorage can only save text/string
// the only job of saveToDos is to save toDos

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

// sometimes savedToDos can be null
// if we delete the localStorage, I get null for savedToDos, b/c there's nothing on localStorage
const savedToDos = localStorage.getItem(TODOS_KEY);

// if savedToDos exist on localStorage, make another variable parsedToDos
// parsedToDos will take string coming from the localStorage and turn it into live object

// forEach : allows to execute function for each item in the array

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
