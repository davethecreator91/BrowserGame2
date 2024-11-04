// const deck = {
//     Red: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, "Skip", "Skip", "Reverse", "Reverse", "Draw Two", "Draw Two"],
//     Green: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, "Skip", "Skip", "Reverse", "Reverse", "Draw Two", "Draw Two"],
//     Blue: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, "Skip", "Skip", "Reverse", "Reverse", "Draw Two", "Draw Two"],
//     Yellow: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, "Skip", "Skip", "Reverse", "Reverse", "Draw Two", "Draw Two"],
//     Wild: ["Wild", "Wild", "Wild", "Wild", "Wild Draw Four", "Wild Draw Four", "Wild Draw Four", "Wild Draw Four"]
// };

// for dealCards = () => {
// let i = 0; if i < 8; i++;

// }

const tableCard = [];
const cardDeck = [
  { color: "red", value: "0", image: "banana" },
  { color: "red", value: "1", image: "UnoCards/red1.png" },
  // { color: "red", value: "2", image: "banana" },
  // { color: "red", value: "3", image: "banana" },
  // { color: "red", value: "4", image: "banana" },
  // { color: "red", value: "5", image: "banana" },
  // { color: "red", value: "6", image: "banana" },
  // { color: "red", value: "7", image: "banana" },
  // { color: "red", value: "8", image: "banana" },
  // { color: "red", value: "9", image: "banana" },
  // { color: "red", value: "skip", image: "banana" },
  // { color: "red", value: "reverse", image: "banana" },
  // { color: "red", value: "draw2", image: "banana" },
  // { color: "yellow", value: "0", image: "banana" },
  // { color: "yellow", value: "1", image: "banana" },
  // ... add the rest of the cards as in your original array
];

const player1Hand = [];

//old function for random cards
// const deal7RandomCards = () => {
//     for (let i = 1; i < 8; i++) {
//         const randomIndex = Math.floor(Math.random() * cardDeck.length)
//         const randomCard = cardDeck[randomIndex]
//         player1Hand.push(randomCard);
//     }
// }
// deal7RandomCards();
// Function to randomly shuffle cards into player's hand
const deal1Rand = (cards) => {
  const randomIndex = Math.floor(Math.random() * cardDeck.length);
  const randomCard = cardDeck[randomIndex];
  cards.push(randomCard);
};

const deal7Rand = () => {
  for (let i = 0; i < 7; i++) {
    deal1Rand();
  }
};
// deal7Rand();
deal1Rand(tableCard);
deal1Rand(player1Hand);
console.log(tableCard);
console.log(player1Hand);

// // Function to display the player's hand
// function displayplayer1Hand() {
//     // Create a container div for the player's hand
//     const handContainer = document.createElement("div");
//     handContainer.style.display = "flex"; // Aligns cards in a row
//     handContainer.style.gap = "10px"; // Adds space between cards
//     handContainer.style.border = "1px solid #333";
//     handContainer.style.padding = "10px";

//     // Loop through each card in the player1Hand and add it to the handContainer
//     player1Hand.forEach(card => {
//         const cardDiv = document.createElement("div");
//         cardDiv.style.width = "100px";
//         cardDiv.style.height = "150px";
//         cardDiv.style.border = "1px solid black";
//         cardDiv.style.overflow = "hidden";
//         cardDiv.style.borderRadius = "5px";

//         const cardImg = document.createElement("img");
//         cardImg.src = card.image;
//         cardImg.alt = `${card.color} ${card.value}`;
//         cardImg.style.width = "100%";
//         cardImg.style.height = "100%";
//         // cardImg.style.objectFit = "cover";// Ensures image covers the div

//         cardDiv.appendChild(cardImg);
//         handContainer.appendChild(cardDiv);
//     });

//     // Append the player's hand container to the body
//     document.body.appendChild(handContainer);
// }

// displayplayer1Hand(1);

// function deal1card() {
//     randomIndex = Math.floor(Math.random) * cardDeck.length;
//     randomCard = cardDeck[randomIndex]
//     player1Hand.push(randomCard)
// }

// console.log(deal1card())

//test to see how to handle color matching

// if tableCard.color === red {
//     player1Hand
// }

// deckSize = Object.keys(deck).length

// console.log(deckSize)
// console.log(dealCards(player1Hand));

// // creating players hand element
// deckElement = document.createElement("p")
// deckElement.innerText = 

// function addElement() {
// const newDiv = document.createElement("div");
// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.border = "1px solid black";
// newDiv.style.overflow = "hidden";
// }

// function displayImageFromCardDeck(index) {
//         // Ensure the index is within bounds (adapted from GPT4)
//         if (index < 0 || index >= cardDeck.length) {
//             console.error("Index out of bounds");
//             return;
//         }
// const imagePath = cardDeck[index].image;//test card, replace later with table hand or player hand
// const img = document.createElement("img");
// img.src = imagePath;
// img.alt = `${cardDeck[index].color} ${cardDeck[index].value}`

// document.body.appendChild(img);

// newDiv.appendchild(cardImg)
// document.body.appendChild(newDiv)
// }

//this changes turns based on a rotation between players
// function changeTurns() {
// if (player1 === true) {
//     player1 = false;  
//     player2 = true;
// }
//     else if (player2 === true) {
//     player1 = true;  
//     player2 = false;
// }
// }
//attempt 2

// endTurnButton.onclick = changeTurns()
// //this determines who the current player is
// function currentPlayer() {
// return players[currentPlayerIndex];
// }

    // player1Hand.pop(playedCard)