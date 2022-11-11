let player = {
    name: "Per",
    chips: 145
}

let cards = [] 
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let math = Math.floor(Math.random() * 13 ) + 1
    if (math > 10) {
        return 10
    } else if (math === 1) {
        return  11
    } else {
        return math
    }
}



function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "Yes! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    cardsEl.textContent = "Cards: "

    //renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "  
    }

     // renders out All the cards we have
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()  
    }

}



