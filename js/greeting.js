const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usename";

function onLoginSubmit(event){
  event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
  loginForm.classList.add(HIDDEN_CLASSNAME); //폼을 제출했을 때 login-form 클래스에 hidden 클래스명 추가하기
  const username = loginInput.value;//폼에 이름을 입력했을 때의 value를 가져옴
  // greeting.innerText = "Hello " + username;//h1태그에 유저네임을 넣는다.
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}!`; //저장된 이름을 보이게 함
  greeting.classList.remove(HIDDEN_CLASSNAME); //greeting의 hidden을 삭제 하여 보여지게 함
}

const savedUsername = localStorage.getItem(USERNAME_KEY);//유저 정보 확인

if (savedUsername === null){//유저 네임이 없을 때
  loginForm.classList.remove(HIDDEN_CLASSNAME);//form의 hidden을 삭제 하여 보여지게 함
  loginForm.addEventListener("submit", onLoginSubmit);//보여진 form에 내용을 입력(submit)하면 함수 실행
} else { //유저 네임이 있을 때
  paintGreetings(savedUsername);
}