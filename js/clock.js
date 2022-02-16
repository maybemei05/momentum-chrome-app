const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello(), 5000); 5초 후에 sayHello() 함수 실행, 이후 5초 마다 반복
// setTimeout(sayHello(), 5000); 5초 후에 sayHello() 함수 실행, 반복 없음

getClock() // 웹사이트가 로드 됐을 때 바로 보여주도록 호출, 아래는 1초 후부터 나타남
setInterval(getClock, 1000); //1초마다 갱신해줌 -> 1초마다 초가 바뀜