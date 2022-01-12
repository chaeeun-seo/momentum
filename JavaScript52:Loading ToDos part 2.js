// Loading ToDos part 2

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// problem : when we refresh, only the new ones are saved on the loaclStorage and not the old ones
// the problem occurs b/c whenever the application starts, toDos array is always empty
// whenever I write a newTodo and I submit the form, I'm just pushing the newTodos into the toDos array
// when I save that toDos, I'm saving the array that only contains the newTodos, it doesn't contain the old toDos
// the old toDos are on the localStorage
// the new toDos are the ones that user is writing
// we're only adding newTodos to the toDos array and saving only the newTodos to the localStorage
// we're forgetting the previous copy of toDos that we have

// change const to let so we can update
// start the toDos array with the value of old toDos that we found in localStorage

let toDos = [];

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

const savedToDos = localStorage.getItem(TODOS_KEY);

// array.forEach(function) : allows to execute function for each item in the array
// I want to take each item inside the parsedToDos array and want to paint that item

// if we find out that there is old toDos on the localStorage, then we're going to restore toDos to the old toDos value(parsedToDos)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// new problem : when I delete todos and refresh, they are not deleted b/c they're still on the localStorage
