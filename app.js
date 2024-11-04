



//below are the main objects of the game
////////////Objects///////////////////////////
const cardDeck = [
    // { color: "red", value: "0", image: "UnoCards/.png" },
    { color: "red", value: "1", image: "UnoCards/red1.png" },
    { color: "red", value: "2", image: "UnoCards/red2.png" },
    { color: "red", value: "3", image: "UnoCards/red3.png" },
    { color: "red", value: "4", image: "UnoCards/red4.png" },
    { color: "red", value: "5", image: "UnoCards/red5.png" },
    { color: "red", value: "6", image: "UnoCards/red6.png" },
    { color: "red", value: "7", image: "UnoCards/red7.png" },
    { color: "red", value: "8", image: "UnoCards/red8.png" },
    { color: "red", value: "9", image: "UnoCards/red9.png" },
    { color: "red", value: "skip", image: "UnoCards/redSkip.png" },
    { color: "red", value: "reverse", image: "UnoCards/RedReverse.png" },
    { color: "red", value: "draw2", image: "UnoCards/redDraw+2.png" },
  
    // { color: "yellow", value: "0", image: "UnoCard" },
    { color: "yellow", value: "1", image: "UnoCards/yellow1.png" },
    { color: "yellow", value: "2", image: "UnoCards/yellow2.png" },
    { color: "yellow", value: "3", image: "UnoCards/yellow3.png" },
    { color: "yellow", value: "4", image: "UnoCards/yellow4.png" },
    { color: "yellow", value: "5", image: "UnoCards/yellow5.png" },
    { color: "yellow", value: "6", image: "UnoCards/yellow6.png" },
    { color: "yellow", value: "7", image: "UnoCards/yellow7.png" },
    { color: "yellow", value: "8", image: "UnoCards/yellow8.png" },
    { color: "yellow", value: "9", image: "UnoCards/yellow9.png" },
    { color: "yellow", value: "skip", image: "UnoCards/yellowSkip.png" },
    { color: "yellow", value: "reverse", image: "UnoCards/yellowReverse.png" },
    { color: "yellow", value: "draw2", image: "UnoCards/yellowDraw+2.png" },
  
    // { color: "green", value: "0", image: "UnoCards" },
    { color: "green", value: "1", image: "UnoCards/green1.png" },
    { color: "green", value: "2", image: "UnoCards/green2.png" },
    { color: "green", value: "3", image: "UnoCards/green3.png" },
    { color: "green", value: "4", image: "UnoCards/green4.png" },
    { color: "green", value: "5", image: "UnoCards/green5.png" },
    { color: "green", value: "6", image: "UnoCards/green6.png" },
    { color: "green", value: "7", image: "UnoCards/green7.png" },
    { color: "green", value: "8", image: "UnoCards/green8.png" },
    { color: "green", value: "9", image: "UnoCards/green9.png" },
    { color: "green", value: "skip", image: "UnoCards/greenSkip.png" },
    { color: "green", value: "reverse", image: "UnoCards/greenReverse.png" },
    { color: "green", value: "draw2", image: "UnoCards/greenDraw+2.png" },
  
    // { color: "blue", value: "0", image: "UnoCards" },
    { color: "blue", value: "1", image: "UnoCards/blue1.png" },
    { color: "blue", value: "2", image: "UnoCards/blue2.png" },
    { color: "blue", value: "3", image: "UnoCards/blue3.png" },
    { color: "blue", value: "4", image: "UnoCards/blue4.png" },
    { color: "blue", value: "5", image: "UnoCards/blue5.png" },
    { color: "blue", value: "6", image: "UnoCards/blue6.png" },
    { color: "blue", value: "7", image: "UnoCards/blue7.png" },
    { color: "blue", value: "8", image: "UnoCards/blue8.png" },
    { color: "blue", value: "9", image: "UnoCards/blue9.png" },
    { color: "blue", value: "skip", image: "UnoCards/blueSkip.png" },
    { color: "blue", value: "reverse", image: "UnoCards/blueReverse.png" },
    { color: "blue", value: "draw2", image: "UnoCards/blueDraw+2.png" },
  
    // Wild Cards
    { color: "wild", value: "wild", image: "UnoCards/wild.png" },
    { color: "wild", value: "wild", image: "UnoCards/wild.png" },
    { color: "wild", value: "wild", image: "UnoCards/wild.png" },
    { color: "wild", value: "wild", image: "UnoCards/wild.png" },
    { color: "wild", value: "draw4", image: "UnoCards/wild+4.png" },
    { color: "wild", value: "draw4", image: "UnoCards/wild+4.png" },
    { color: "wild", value: "draw4", image: "UnoCards/wild+4.png" },
    { color: "wild", value: "draw4", image: "UnoCards/wild+4.png" }
  ];
  
const tableCard = [

  ]

const player1Hand = [

]

const player2Hand = [

]

const players = [player1Hand, player2Hand];
let currentPlayerIndex = 0;

//randomly shuffle cards into players hand

const deal1Rand = (cards) => {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    const randomCard = cardDeck[randomIndex];
    cards.push(randomCard);
    }
    
    const deal7Rand = (cards) => {
    for (let i=0; i<7;i++) {
        deal1Rand(cards);
    }
    }
    // deal7Rand();

// call to console and run dealing cards function
// deal7Rand(player1Hand);
// deal1Rand(tableCard);
console.log(player1Hand);
console.log(tableCard)


// Function to display the player's hand

function displayplayer1Hand() {
    // remove existing hand to update
    const existingHandContainer = document.getElementById("player1-hand");
    if (existingHandContainer) existingHandContainer.remove();
    // Create a container div for the player's hand
    
    const handContainer = document.createElement("div");
    handContainer.id = "player1-hand";
    // handContainer.style.position = "sticky";
    handContainer.style.display = "flex"; // Aligns cards in a row
    // handContainer.style.position = "fixed"
    handContainer.style.gap = "10px"; // Adds space between cards
    handContainer.style.border = "1px solid #333";
    handContainer.style.padding = "10px";
    handContainer.style.borderRadius = "5px";
    handContainer.style.transform = "translateY(160%)"
    // handContainer.style.align-content = "flex-end";

    // Loop through each card in the player1Hand and add it to the handContainer
    player1Hand.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.style.width = "100px";
        cardDiv.style.height = "150px";
        cardDiv.style.border = "1px solid black";
        cardDiv.style.overflow = "hidden";
        cardDiv.style.borderRadius = "5px";
        
        cardDiv.addEventListener('click',() => {
            console.log('You clicked me!')
            playCard(index)
            // cardDiv.onclick.push(tableCard)
        })

        const cardImg = document.createElement("img");
        cardImg.src = card.image;
        cardImg.alt = `${card.color} ${card.value}`;
        cardImg.style.width = "100%";
        cardImg.style.height = "100%";
        // cardImg.style.objectFit = "cover";// Ensures image covers the div

        cardDiv.appendChild(cardImg);
        handContainer.appendChild(cardDiv);
    });

    // Append the player's hand container to the body
    document.body.appendChild(handContainer);
}
// displayplayer1Hand(1);
////////////////Display to DOM//////////////////


//  function to display table card

 const displayTableCard = (card) => {

// refreshes page
const existingTableCardContainer = document.getElementById("table-card");
if (existingTableCardContainer) existingTableContainer.remove();

//create table card container div

const tableCardContainer = document.createElement("div");
tableCardContainer.id = "table-card";
tableCardContainer.style.width = "100px";
tableCardContainer.style.height = "150px";
tableCardContainer.style.border = "1px solid black";
tableCardContainer.style.display = "flex";
tableCardContainer.style.transform = "translate(525%, -50%)";
tableCardContainer.style.borderRadius = "5px";


//create table card img

const tableCardImg = document.createElement("img")
tableCardImg.src = tableCard[0].image;
tableCardImg.alt = `${tableCard[0].color} ${tableCard[0].value}`
tableCardImg.style.width = "100%";
tableCardImg.style.height = "100%";


//child append img to div
tableCardContainer.appendChild(tableCardImg)
//child append div to document
document.body.appendChild(tableCardContainer)
//go back to container div and style to put in center of screen
 }
//  displayTableCard()

// function to display Deck
 const displayDeck = () => {    
const deckContainer = document.createElement("div")
deckContainer.style.height = "150px";
deckContainer.style.width = "100px";
deckContainer.style.border = "1px solid black";
deckContainer.style.transform = "translate(390%, -150%)"
deckContainer.addEventListener("click", () => {
    console.log("Deck clicked!");
});
const deckImg = document.createElement("img")
deckImg.style.width = "100%";
deckImg.style.height = "100%";
deckImg.src = "UnoCards/UnoBack.png";
deckImg.alt = "UnoBack";

deckContainer.appendChild(deckImg);
document.body.appendChild(deckContainer);
 }
//  displayDeck()

//

//////////////////ENABLE INTERACION/////////////////
// player pushes selection to tablecard
const playCard = (cardIndex) => {
    
    const playedCard = player1Hand.splice(cardIndex, 1)[0];
    tableCard.push(playedCard);
    console.log('selected card moved to tableCard')
    displayplayer1Hand();
    updateTable();
}


// Function to display the played card on the table
function updateTable() {
    const tableCardContainer = document.getElementById("table-card");
    if (tableCardContainer && tableCard.length > 0) {
        const playedCard = tableCard[tableCard.length - 1]; // Last card on table
        tableCardContainer.querySelector("img").src = playedCard.image;
        tableCardContainer.querySelector("img").alt = `${playedCard.color} ${playedCard.value}`;
    }
}

//this button ends turn for current player and starts next player's turn

endTurnButton = document.createElement("button");
endTurnButton.style.position = "fixed";
endTurnButton.style.bottom = "20px";
endTurnButton.style.right = "20px";
endTurnButton.style.padding = "10px 20px";
endTurnButton.style.fontSize = "16px";
endTurnButton.style.cursor = "pointer";
endTurnButton.innerText = "End Turn";
// endTurnButton.addEventListener("click",changeTurns)
// document.body.appendChild(endTurnButton)

const startGame = () => {
    deal1Rand(tableCard);
    deal7Rand(player1Hand);
    displayplayer1Hand();
    displayTableCard(tableCard[0]);
    displayDeck();
    document.body.appendChild(endTurnButton)
    document.body.removeChild(startButton)
    document.body.appendChild(UnoOutButton);
    }

//Start Button
startButton = document.createElement("button");
startButton.display = "flex";
// startButton.style.justifyContent = "center";
// startButton.style.alignItems = "center";
startButton.style.position = "fixed";
startButton.innerText = "Start";
startButton.style.padding = "10px 20px";
// startButton.style.transform = "translate(450%, 250%)";
startButton.style.cursor = "pointer";
console.log(startButton);
document.body.appendChild(startButton);
startButton.addEventListener("click", startGame);

UnoOutButton = document.createElement("button");
UnoOutButton.style.position = "fixed";
UnoOutButton.style.bottom = "100px";
UnoOutButton.style.right = "20px";
UnoOutButton.style.padding = "10px 20px";
UnoOutButton.style.fontSize = "16px";
UnoOutButton.style.cursor = "pointer";
UnoOutButton.innerText = "Uno Out";
UnoOutButton.addEventListener("click",endGame);


gameResult = document.createElement("p")
gameResult.innerText = "You Win"
// document.addEventListener("click",)

// function changeTurns() {
//     currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
// }

////////////////////GAME STATE//////////////////



const endGame = () => {

    // if (player1Hand.length = 0)
    //     return
document.body.removeChild(document.getElementById(player1Hand));
document.body.removeChild(document.getElementById(tableCard));
document.body.removeChild(document.getElementById(deckContainer));
document.body.removeChild(endTurnButton);
document.body.removeChild(UnoOutButton);
}

// const gameState = () => {


// }