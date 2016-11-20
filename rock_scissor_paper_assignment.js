document.getElementById("play").addEventListener("click", btnClick);

function btnClick() {
  var player1 = document.getElementById('player-choice').value;
  document.getElementById("player-result").innerHTML = player1;
  var player2 = Math.floor(Math.random() * 3);
  document.getElementById("computer-result").innerHTML = player2;

  document.getElementById('pic1').innerHTML = '<img src='+ checkPics(player1) + '>';
  document.getElementById('pic2').innerHTML = '<img src='+ checkPics(player2) + '>';
  // the logics
  if (player1 == 0 && player2 == 1 || player1 == 1 && player2 == 2 || player1 == 2 && player2 == 0) {
    document.getElementById('screening').innerHTML = "<p>computer has won! </p>";
  }else if (player1 == player2) {
    document.getElementById('screening').innerHTML = "<p>EVEN!</p>";
  }else {
    document.getElementById('screening').innerHTML = "<p>You won! </p>";
  }
}
function checkPics (player) {
  // we put == because value function probably return a string 
  if (player == 0) {
    return "img/rock.png";
  }else if (player == 1) {
    return "img/paper.png";
  }else {
    return "img/scissors.png";
  }
}
