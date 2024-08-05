const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("your-choice")
const displayResult = document.getElementById("results")
var scoreU = document.getElementById("score-u")
var scoreC = document.getElementById("score-c")

rock.addEventListener("click",function(){
    userChoice.innerHTML = "Rock"
    randomNumber()
})
paper.addEventListener("click",function(){
    userChoice.innerHTML = "Paper"
    randomNumber()
})
scissors.addEventListener("click",function(){
    userChoice.innerHTML = "Scissors"
    randomNumber()
})
function randomNumber(){
    let a =  Math.floor(Math.random()*3)
    if(a==1){
        computerChoice.innerHTML = "Rock"
        check()
    }
    else if(a==2){
        computerChoice.innerHTML = "Paper"
        check()
    }
    else{
        computerChoice.innerHTML = "Scissors"
        check()
    }
}
function check(){
    if(computerChoice.innerHTML==userChoice.innerHTML){
        displayResult.innerHTML = "That's a Draw!"
    }
    else if(computerChoice.innerHTML=="Rock"){
        if(userChoice.innerHTML=="Paper"){
            displayResult.innerHTML = "You Won!"
            scoreUup()
        }
        if(userChoice.innerHTML=="Scissors"){
            displayResult.innerHTML = "You Lost!"
            scoreCup()
        }
    }
    else if(computerChoice.innerHTML=="Paper"){
        if(userChoice.innerHTML=="Scissors"){
            displayResult.innerHTML = "You Won!"
            scoreUup()
        }
        if(userChoice.innerHTML=="Rock"){
            displayResult.innerHTML = "You Lost!"
            scoreCup()
        }
    }
    else if(computerChoice.innerHTML=="Scissors"){
        if(userChoice.innerHTML=="Rock"){
            displayResult.innerHTML = "You Won!"
            scoreUup()
        }
        if(userChoice.innerHTML=="Paper"){
            displayResult.innerHTML = "You Lost!"
            scoreCup()
        }
    }
}
function scoreUup(){
    let a = scoreU.innerHTML
    a = parseInt(a)
    a = a+1
    scoreU.innerHTML = a
}
function scoreCup(){
    let a = scoreC.innerHTML
    a = parseInt(a)
    a = a+1
    scoreC.innerHTML = a
}