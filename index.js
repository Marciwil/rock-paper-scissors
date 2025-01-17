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

// const body= document.querySelector("body");
const body= document.body
const container= document.createElement("container"); 
const result= document.createElement("div");
const score= document.createElement("div");

body.appendChild(container)

// Game Play Round //
// Your game will be played round by round.
// You will write a function that takes the human and computer player choices
// as arguments, plays a single round, increments the round winner's score
// and logs a winner announcement. 

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper"){
    result.textContent="You lose! Paper beats Rock."
    computerScore++ // computerScore = computerScore + 1
  }
  if (humanChoice === "Rock" && computerChoice === "Scissor"){
    result.textContent="You win! Rock beats Scissors."
    humanScore++
  }  
  if (humanChoice === "Rock" && computerChoice === "Rock"){
    result.textContent="It's a tie!"
  }
  if (humanChoice === "Paper" && computerChoice === "Rock"){
    result.textContent="You win! Paper beats Rock."
    humanScore++
    }
  if (humanChoice === "Paper" && computerChoice === "Scissors"){
    result.textContent="You lose! Scissors beat Paper."
    computerScore++
  }
  if (humanChoice === "Paper" && computerChoice === "Paper"){
    result.textContent="It's a tie!"
  }
  if (humanChoice === "Scissors" && computerChoice === "Rock"){
    result.textContent="You lose! Rock beats Scissors."
    computerScore++
  }
  if (humanChoice === "Scissors" && computerChoice === "Paper"){
    result.textContent="You win! Scissors beats Paper."
    humanScore++
  }
  if (humanChoice === "Scissors" && computerChoice === "Scissors"){
    result.textContent="It's a tie!"
  }
  score.textContent= "Computer Score " + computerScore + " Player Score " + humanScore;
  if (humanScore === 5) {
    score.textContent= "Player Wins!";
  }
  if (computerScore === 5) {
    score.textContent= "Computer Wins!";
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
rock.textContent= "Rock";
const paper= document.createElement("button");
paper.textContent= "Paper";
const scissors= document.createElement("button");
scissors.textContent= "Scissors";


rock.addEventListener('click',() => playRound("Rock", getComputerChoice()));
paper.addEventListener('click',() => playRound("Paper", getComputerChoice()));
scissors.addEventListener('click',() => playRound("Scissors", getComputerChoice()));

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(result);
container.appendChild(score);