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

const playerHand = [];

//old function for random cards
// const deal7RandomCards = () => {
//     for (let i = 1; i < 8; i++) {
//         const randomIndex = Math.floor(Math.random() * cardDeck.length)
//         const randomCard = cardDeck[randomIndex]
//         playerHand.push(randomCard);
//     }
// }
// deal7RandomCards();
// Function to randomly shuffle cards into player's hand
const deal1Rand = (cards) => {
const randomIndex = Math.floor(Math.random() * cardDeck.length);
const randomCard = cardDeck[randomIndex];
cards.push(randomCard);
}

const deal7Rand = () => {
for (let i=0; i<7;i++) {
    deal1Rand();
}
}
// deal7Rand();
deal1Rand(tableCard);
deal1Rand(playerHand)
console.log(tableCard);
console.log(playerHand)


// // Function to display the player's hand
// function displayPlayerHand() {
//     // Create a container div for the player's hand
//     const handContainer = document.createElement("div");
//     handContainer.style.display = "flex"; // Aligns cards in a row
//     handContainer.style.gap = "10px"; // Adds space between cards
//     handContainer.style.border = "1px solid #333";
//     handContainer.style.padding = "10px";

//     // Loop through each card in the playerHand and add it to the handContainer
//     playerHand.forEach(card => {
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

// displayPlayerHand(1);



// function deal1card() {
//     randomIndex = Math.floor(Math.random) * cardDeck.length;
//     randomCard = cardDeck[randomIndex]
//     playerHand.push(randomCard)
// }

// console.log(deal1card())