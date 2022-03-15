const playlistForm = document.querySelector("#playlist-form");
const playlistInput = playlistForm.querySelector("#playlist-form input");
const youtubePlayer = document.querySelector("#player");

const PLAYLIST_KEY = "playlistCode";

function onPlaylistCodeSubmit(event) {
  event.preventDefault();
  const playlistCode = playlistInput.value;
  localStorage.setItem(PLAYLIST_KEY, playlistCode);
  paintPlaylist();
}

function paintPlaylist() {
  youtubePlayer.classList.remove(HIDDEN_CLASSNAME); //youtubePlayer hidden을 삭제 하여 보여지게 함
}

const savedPlaylistCode = localStorage.getItem(PLAYLIST_KEY); //유저 정보 확인

console.log(savedPlaylistCode);

if (savedPlaylistCode === null) {
  //유저 네임이 없을 때
  playlistForm.classList.remove(HIDDEN_CLASSNAME); //form의 hidden을 삭제 하여 보여지게 함
  playlistForm.addEventListener("submit", onPlaylistCodeSubmit); //보여진 form에 내용을 입력(submit)하면 함수 실행
} else {
  //유저 네임이 있을 때
  paintPlaylist(savedPlaylistCode);
}

console.log(savedPlaylistCode);

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubePlayerAPIReady(playlistCode) {
  player = new YT.Player("player", {
    // height: "300",
    // width: "200",
    playerVars: {
      listType: "playlist",
      list: playlistCode,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 1000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
