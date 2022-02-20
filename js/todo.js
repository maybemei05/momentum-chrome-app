const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function doneToDo(event) { //완료
  const li = event.target.parentElement;
  li.style.textDecoration = "line-through";
  li.style.fontStyle = "italic";
}

function deleteToDo(event) { //삭제
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button1 = document.createElement("button");
  button1.innerText = "완료";
  button1.addEventListener("click", doneToDo);

  const button2 = document.createElement("button");
  button2.innerText = "삭제";
  button2.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button1);
  li.appendChild(button2);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //새로운 변수에 저장해주고
  toDoInput.value = ""; //새로 입력할 수 있도록 비워주기
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj); //toDos 배열에 새로 입력한 todo 항목을 push
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos; //빈 toDos에 저장했던 것들을 불러옴(복원)
  parsedTodos.forEach(paintToDo);
}