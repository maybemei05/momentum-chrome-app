const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];


function doneToDo(event) { //완료
  const li = event.target.parentElement; 
  li.style.textDecoration = "line-through";
  li.style.fontStyle = "italic";
}

function deleteToDo(event) { //삭제
  const li = event.target.parentElement; 
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

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
  toDos.push(newTodo); //toDos 배열에 새로 입력한 todo 항목을 push
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);