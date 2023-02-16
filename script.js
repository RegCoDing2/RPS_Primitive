let playerScore = 0;
var computerScore = 0;

function computerPlay()
{
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase(); 

    if(playerSelection == "rock" && computerSelection == "Rock"){
        return "\nIt's a tie! Rock cannot beat Rock";
    }

    else if(playerSelection == "paper" && computerSelection == "Rock"){
        playerScore++;
        return "\nPlayer wins! Paper beats Rock";
    }

    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        computerScore++;
        return "\nComputer wins! Rock beats Scissors";
    }

    else if(playerSelection == "rock" && computerSelection == "Paper"){
        computerScore++;
        return "\nComputer wins! Paper beats Rock";
    }

    else if(playerSelection == "paper" && computerSelection == "Paper"){
        return "\nIt's a tie! Paper cannot beat Paper";
    }

    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        playerScore++;
        return "\nPlayer wins! Scissors beats Paper";
    }

    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        return "\nPlayer wins! Rock beats Scissors";
    }

    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        computerScore++;
        return "\nComputer wins! Scissors beats Paper";
    }

    else if(playerSelection == "scissors" && computerSelection == "Scissors"){
        return "\nIt's a tie! Scissors cannot beat Scissors";
    }
}

function game()
{
    let playerChoice;
    let computerChoice;

    for(let i = 0; i < 5; i++)
    {
        playerChoice = prompt("Rock, paper or Scissors?");
        computerChoice = computerPlay();

        console.log("Player Selection: " + playerChoice);
        console.log("Computer Selection: " + computerChoice)

        console.log(playRound(playerChoice, computerChoice));
    }

    if(playerScore > computerScore)
    {
        console.log("Player wins!\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if(playerScore < computerScore)
    {
        console.log("Computer Wins!\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else
    {
        console.log("It's a tie!\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
}

game();

