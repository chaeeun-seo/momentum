// Deleting ToDos part 2

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innermood = newTodo.mood;
  const button = document.createElement("button");
  button.innermood = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    mood: newTodo,
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

// array.filter(function)
// if we want to delete sth from the array, we don't go to array and delete sth
// what we actually do is to create a new array without the item that we want to delete
// we don't delete item, we exclude the item
// old array will stay and we create a new array without item that we want to delete
// the function in the filter should return true if I want to keep the object in the new array
// if the function returns false, that item will not be included in the new array
// the function should return true, if the item should stay

function sexyFilter(item) {
  return item.mood !== "sad";
}
console.log(
  [{ mood: "happy" }, { mood: "sad" }, { mood: "excited" }].filter(sexyFilter)
);
