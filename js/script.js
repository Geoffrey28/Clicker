var perso1 = document.querySelector(".perso1");

var personnage1 = {
  level : 1,
  price : 200,
  priceMultiplier : 200,
  productMultiplier : 4,
}

function calculatingPrice(personnage1) {
  price = priceMultiplier * (level + 1);
}

perso1.onclick =
calculatingPrice(personnage1);
