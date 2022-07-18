let player = {
  Name: "Twins141",
  Chips: 0,
};

let cards = [];
let sum = 0;
let ganaste = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");

console.log(cards);

function startGame() {
  if (ganaste === true) {
    playerEl.textContent += ": $100";
  }
  return playerEl;
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }
  sumEL.textContent = "Total: " + sum;
  if (sum <= 20) {
    message = "Another Card?";
  } else if (sum === 21) {
    message = "You won!";
    ganaste = true;
  } else {
    message = "You are out!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive == true && ganaste === false) {
    ganaste;
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

function reset() {
  messageEl.textContent = "Want to play?";
  sumEL.textContent = "Total:";
  cardsEL.textContent = "Cards:";
}
