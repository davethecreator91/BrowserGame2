

const tableCard = [

]
//Glen's Suggestion
//I have every card .png exept 0 card
const cardDeck = [
    { color: "red", value: "0", image: "banana" },
    { color: "red", value: "1", image: "UnoCards/red1.png" },
    { color: "red", value: "2", image: "banana" },
    { color: "red", value: "3", image: "banana" },
    { color: "red", value: "4", image: "banana" },
    { color: "red", value: "5", image: "banana" },
    { color: "red", value: "6", image: "banana" },
    { color: "red", value: "7", image: "banana" },
    { color: "red", value: "8", image: "banana" },
    { color: "red", value: "9", image: "banana" },
    { color: "red", value: "skip", image: "banana" },
    { color: "red", value: "reverse", image: "banana" },
    { color: "red", value: "draw2", image: "banana" },
  
    { color: "yellow", value: "0", image: "banana" },
    { color: "yellow", value: "1", image: "banana" },
    { color: "yellow", value: "2", image: "banana" },
    { color: "yellow", value: "3", image: "banana" },
    { color: "yellow", value: "4", image: "banana" },
    { color: "yellow", value: "5", image: "banana" },
    { color: "yellow", value: "6", image: "banana" },
    { color: "yellow", value: "7", image: "banana" },
    { color: "yellow", value: "8", image: "banana" },
    { color: "yellow", value: "9", image: "banana" },
    { color: "yellow", value: "skip", image: "banana" },
    { color: "yellow", value: "reverse", image: "banana" },
    { color: "yellow", value: "draw2", image: "banana" },
  
    { color: "green", value: "0", image: "banana" },
    { color: "green", value: "1", image: "banana" },
    { color: "green", value: "2", image: "banana" },
    { color: "green", value: "3", image: "banana" },
    { color: "green", value: "4", image: "banana" },
    { color: "green", value: "5", image: "banana" },
    { color: "green", value: "6", image: "banana" },
    { color: "green", value: "7", image: "banana" },
    { color: "green", value: "8", image: "banana" },
    { color: "green", value: "9", image: "banana" },
    { color: "green", value: "skip", image: "banana" },
    { color: "green", value: "reverse", image: "banana" },
    { color: "green", value: "draw2", image: "banana" },
  
    { color: "blue", value: "0", image: "banana" },
    { color: "blue", value: "1", image: "banana" },
    { color: "blue", value: "2", image: "banana" },
    { color: "blue", value: "3", image: "banana" },
    { color: "blue", value: "4", image: "banana" },
    { color: "blue", value: "5", image: "banana" },
    { color: "blue", value: "6", image: "banana" },
    { color: "blue", value: "7", image: "banana" },
    { color: "blue", value: "8", image: "banana" },
    { color: "blue", value: "9", image: "banana" },
    { color: "blue", value: "skip", image: "banana" },
    { color: "blue", value: "reverse", image: "banana" },
    { color: "blue", value: "draw2", image: "banana" },
  
    // Wild Cards
    { color: "wild", value: "wild", image: "banana" },
    { color: "wild", value: "wild", image: "banana" },
    { color: "wild", value: "wild", image: "banana" },
    { color: "wild", value: "wild", image: "banana" },
    { color: "wild", value: "draw4", image: "banana" },
    { color: "wild", value: "draw4", image: "banana" },
    { color: "wild", value: "draw4", image: "banana" },
    { color: "wild", value: "draw4", image: "banana" }
  ];
  

const playerHand = [

]

//randomly shuffle cards into players hand

// for each card in deck randomly pop into playerHand
const dealRandomCards = () => {
    for (let i = 1; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * cardDeck.length)
        const randomCard = cardDeck[randomIndex]
        playerHand.push(randomCard);
    }
}
dealRandomCard();
console.log(playerHand);
// deckSize = Object.keys(deck).length
// console.log(deckSize)
// console.log(dealCards(playerHand));

// // creating players hand element
// deckElement = document.createElement("p")
// deckElement.innerText = 

function addElement() {
const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.border = "1px solid black";
newDiv.style.overflow = "hidden";
}

function SetImageFromCardDeck(index) {
        // Ensure the index is within bounds (adapted from GPT4)
        if (index < 0 || index >= cardDeck.length) {
            console.error("Index out of bounds");
            return;
        }
        const imagePath = cardDeck[randomIndex]
const newImg = document.createElement("img");
newImage.alt = "Description of the image";
newDiv.appendchild(newImg)
document.body.appendChild(newDiv)
}

console.log(dealRandomCards()