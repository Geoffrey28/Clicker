var clickArea = document.getElementById('clickArea');
var multiplier = document.getElementById('multiplier');
var multiplierValue = 1;
var score = document.querySelector('.score');
var scoreValue = 0;

clickArea.addEventListener('click', function() {
  addScore();
});

multiplier.addEventListener('click', function(){
  levelUp();
});

function addScore() {
  scoreValue = scoreValue + multiplierValue;
  score.textContent = "Score: " + scoreValue;
}

function levelUp() {
  if (this === multiplier) {
    multiplierValue++;
  }
}
