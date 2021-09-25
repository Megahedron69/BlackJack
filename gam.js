let cards=[]
let sum=0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)

let player=
{
    name:"Nicholas",
    chips:200
}
playerel=document.getElementById("player-el")
playerel.textContent=player.name+":"+" "+"$"+player.chips

function random()
{
    let rno= Math.floor(Math.random()*13)+1
    if(rno===1)
    return 11
    else if(rno>=11&&rno<=13)
    return 10
    else
    return rno   
}

function startGame() {
    let firstCard = random()
    let secondCard = random()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]    
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    wager()
}


function newCard() {
    if(isAlive=== true && hasBlackJack=== false)
    {
    let card = random()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}

function wager(){
    if(hasBlackJack===true)
    player.chips+=50
    else if(isAlive===false && hasBlackJack===false)
    player.chips-=50
    console.log("chipped")
    playerel.textContent=player.name+":"+" "+"$"+player.chips
    if(player.chips===0)
    {
    message="You lost it all !! Start a new game"
    messageEl.textContent = message
    player.chips=200
    }
}