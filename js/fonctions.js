var clicker = document.querySelector(".bossTeemo");
var modal = document.querySelector(".modal");
var leave = document.querySelector(".leaveModal");
var score = document.querySelector(".score");
var nbScore = 0;
var multiplier = document.querySelector(".karthus");
var nbMultiplier = 1;
var autoScoreArea = document.querySelector(".autoScore")
var autoScore;
var level0 = 1;

function displayScore() {
  score.textContent =  nbScore + " Damage Taken";
}

function displayNbMultiplier(){
  multiplier.innerHTML = "Karthus <br> level : " + level0 + "<br>" + nbMultiplier + " DPclick<br> Level up : " + prix() + " dmg";
}

function displayAutoScore(){
  if ( level1 > 0 || level2 > 0 || level3 > 0 || level4 > 0 ) {
    var autoScore = product1() + product2() + product3();
    autoScoreArea.textContent = "Productivité :" + autoScore + "€/s";
  }
}

function click(){
  nbScore = nbScore + nbMultiplier;
  displayScore();
}

function prix(){
  return 20 * nbMultiplier * nbMultiplier;
}

function buyMultiplier() {
  if (nbScore >= prix()) {
    nbScore = nbScore - prix();
    nbMultiplier = nbMultiplier * 2;
    level0++;
    displayNbMultiplier();
    displayScore();
  } else {
    modal.style.display= 'block';
  }
}

leave.addEventListener('click', function() {
    modal.style.display= 'none';
})


var perso1 = document.querySelector(".sona");
var perso2 = document.querySelector(".olaf");
var perso3 = document.querySelector(".yorick");
var perso4 = document.querySelector(".mordekaiser");
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;


// Sona

function price1() {
  return 200 * ( level1 + 1 );
}

function product1() {
  return 4 * level1;
}

function displayPerso1() {
  perso1.innerHTML = 'Sona<br> Level : ' + level1 + '<br>DPS : ' + product1() + ' Dmg/s<br> Level up : ' + price1() + ' dmg';
}


function buylvl1() {
  if (nbScore >= price1()) {
    nbScore = nbScore - price1();
    level1 = level1 + 1;
    displayPerso1();
    displayScore();
  } else {
    modal.style.display= 'block';
  }
}

function scoreSecond1() {
  nbScore = nbScore + product1();
  displayScore();
}

var intervalID = window.setInterval(scoreSecond1, 1000);


// OLAF

function price2() {
  return 500 * ( level2 + 1 );
}

function product2() {
  return 8 * level2;
}

function displayPerso2() {
  perso2.innerHTML = 'Olaf<br> level : ' + level2 + '<br>DPS : ' + product2() + ' Dmg/s<br> Level up : ' + price2() + " dmg";
}


function buylvl2() {
  if (nbScore >= price2()) {
    nbScore = nbScore - price2();
    level2 = level2 + 1;
    displayPerso2();
    displayScore();
  } else {
    modal.style.display= 'block';
  }
}

function scoreSecond2() {
  nbScore = nbScore + product2();
  displayScore();
}

var intervalID = window.setInterval(scoreSecond2, 1000);


// YORICK

function price3() {
  return 1000 * ( level3 + 1 );
}

function product3() {
  return 12 * level3;
}

function displayPerso3() {
  perso3.innerHTML = 'Yorick<br>level : ' + level3 + '<br>DPS : ' + product3() + ' Dmg/s<br> Level up : ' + price3() + ' dmg';
}


function buylvl3() {
  if (nbScore >= price3()) {
    nbScore = nbScore - price3();
    level3 = level3 + 1;
    displayPerso3();
    displayScore();
  } else {
    modal.style.display= 'block';
  }
}

function scoreSecond3() {
  nbScore = nbScore + product3();
  displayScore();
}

var intervalID = window.setInterval(scoreSecond3, 1000);
var intervalID = window.setInterval(displayAutoScore, 1000);


// PERSO 4

function price4() {
  return 2500 * ( level4 + 1 );
}

function product4() {
  return 18 * level4;
}

function displayPerso4() {
  perso4.innerHTML = 'Mordekaiser<br>Level : ' + level4 + '<br>DPS : ' + product4() + ' Dmg/s<br> Level up : ' + price4() + ' dmg';
}


function buylvl4() {
  if (nbScore >= price4()) {
    nbScore = nbScore - price4();
    level4 = level4 + 1;
    displayPerso4();
    displayScore();
  } else {
    modal.style.display= 'block';
  }
}

function scoreSecond4() {
  nbScore = nbScore + product4();
  displayScore();
}

var intervalID = window.setInterval(scoreSecond4, 1000);


// Achievements

var success1 = document.querySelector('.success1');
var success2 = document.querySelector('.success2');
var success3 = document.querySelector('.success3');
var success4 = document.querySelector('.success4');
var success5 = document.querySelector('.success5');
var success6 = document.querySelector('.success6');

function successScore() {
  if ( nbScore >= 2500 ) {
    success1.textContent = 'L\'ambitieux';
  } else if ( nbScore >= 10000 ) {
    success2.textContent = 'Le génie';
  } else if ( nbScore >= 30000) {
    success3.textContent = 'Le 10e de la street';
  }
}

var intervalID = window.setInterval(successScore, 1000);

var nbClick = 0;

clicker.addEventListener ('click', function(){
  nbClick = nbClick + 1;
  if (nbClick >= 500) {
    success4.textContent = "Il était une fois...";
  } else if (nbClick >= 1000) {
    success5.textContent = "...Un tryHarder...";
  } else if (nbClick >= 10000) {
    success6.textContent = "..qui n'avait pas de vie";
  }
});

var screen = document.querySelector('.container');
screen.oncontextmenu = new Function("return false");

clicker.onclick =
click;
nbClick;
multiplier.onclick =
buyMultiplier;
displayScore();
displayNbMultiplier();

perso1.onclick =
buylvl1;
displayPerso1();

perso2.onclick =
buylvl2;
displayPerso2();

perso3.onclick =
buylvl3;
displayPerso3();

perso4.onclick =
buylvl4;
displayPerso4();
