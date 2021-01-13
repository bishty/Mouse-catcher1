var last = 0;
var score = 0;
$(document).ready(function(){
setInterval(myInterval, 1000);
});
function myInterval() {
  var image = document.createElement("img");
  image.setAttribute("src", "https://sherkhan0786.github.io/jsWhackMouse/rat.png");
  image.setAttribute("onclick", "clicked();");
  var arr = ['mouse1', 'mouse2', 'mouse3', 'mouse4', 'mouse5', 'mouse6', 'mouse7', 'mouse8', 'mouse9'];

  var random = Math.floor(Math.random() * 9);
  document.getElementById(arr[last]).innerHTML = '';

  document.getElementById(arr[random]).appendChild(image);
  last = random;
}
function clicked() {
  score=score+20;
$("#score").html(score);
$("#showScore").html(`Your score is ${score}`);
}


var timeleft = 30;
var downloadTimer = setInterval(function () {

  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
    document.getElementById("result").style.display = "block";
    document.getElementById("game").style.display = "none";
    getCookie(score);
    setCookie(score);
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
    document.getElementById('highScore').innerHTML = document.cookie;
  }
  timeleft -= 1;
}, 1000);

function menu() {
  location.replace("mouse2.html");
}


function getCookie(score) {

  var highScore = document.cookie.split("=")[1];
  if (highScore == undefined) {
    highScore = 0;
  }
  if(score > highScore) {
    console.log("you set a new high score");
    document.getElementById('resultHScore').innerHTML = 'Congratulation You made High Score ' + score;
  }
}


function setCookie(score) {

  var highScore = document.cookie.split("=")[1];
  if (highScore == undefined) {
    highScore = 0;
  }
  if (score > highScore) {
    document.cookie = 'highScore=' + score;
  }
  console.log(document.cookie);
  document.getElementById('highScore').innerHTML = document.cookie;
}