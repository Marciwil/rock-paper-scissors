console.log("Hey, there")

// parseFloat(10)
// Psuedocode //
// console.log("Your game will be played against the computer.")
// console.log("You will write a function that randomly returns rock, paper, or scissors.")

// Rock, Paper, Scissors //
function getComputerChoice(){
  //  const choices = ["Rock", "Paper", "Scissors"]
  //    let choice = choices[parseInt(Math.random() * 3)];
    let choice = parseInt(Math.random() * 3)
    if (choice === 0) {
      return "Rock";
    } else if (choice === 1){
      return "Paper"
    } else if  (choice === 2) {
      return "Scissors"
    }
}

// Human Choice //
// Your game wiil be played be a human player
// You will write a function that takes the user choice and returns it. 

function getHumanChoice(){
  let type = prompt("Choose between rock, paper, or scissors.");
 if (type.toLowerCase() === "rock"){
    return "Rock"
 } 
 if (type.toLowerCase() === "paper"){
    return "Paper"
 } 
 if (type.toLowerCase() === "scissors"){
    return "Scissors"
 }
}

//getHumanChoice()

// Scores //
// Write variables to keep track of the player's score.
let humanScore = 0;
let computerScore = 0;

// Game Play Round //
// Your game will be played round by round.
// You will write a function that takes the human and computer player choices
// as arguments, plays a single round, increments the round winner's score
// and logs a winner announcement. 

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper"){
    console.log("You lose! Paper beats Rock.")
    computerScore++ // computerScore = computerScore + 1
  }
  if (humanChoice === "Rock" && computerChoice === "Scissor"){
    console.log("You win! Rock beats Scissors.")
    humanScore++
  }  
  if (humanChoice === "Rock" && computerChoice === "Rock"){
    console.log("It's a tie!")
  }
  if (humanChoice === "Paper" && computerChoice === "Rock"){
    console.log("You win! Paaper beats Rock.")
    humanScore++
    }
  if (humanChoice === "Paper" && computerChoice === "Scissors"){
    console.log("You lose! Scissors beat Paper.")
    computerScore++
  }
  if (humanChoice === "Paper" && computerChoice === "Paper"){
    console.log("It's a tie!")
  }
  if (humanChoice === "Scissors" && computerChoice === "Rock"){
    console.log("You lose! Rock beats Scissors.")
    computerScore++
  }
  if (humanChoice === "Scissors" && computerChoice === "Paper"){
    console.log("You win! Scissors beats Paper.")
    humanScore++
  }
  if (humanChoice === "Scissors" && computerChoice === "Scissors"){
    console.log("It's a tie!")
  }
  }

//const humanSelection = getHumanChoice()
//const computerSelection = getComputerChoice()

//playRound(humanSelection, computerSelection)

// Play Game //
// Your game will play 5 rounds.
// You will write a function named playGame that calls playround to play 5 rounds,
// keeps track of the scores and declares a winner at the end. 
const rock= document.createElement("button");
const paper= document.createElement("button");
const scissors= document.createElement("button");

rock.addEventListener('click', playRound("Rock", getComputerChoice()));
paper.addEventListener('click', playRound("Paper", getComputerChoice()));
scissors.addEventListener('click', playRound("Scissors", getComputerChoice()));



