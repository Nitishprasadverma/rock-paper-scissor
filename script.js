
// function to generate random choice  
function getComputerChoice() {
    const choices = ["Rock", "Sicssor", "Paper"];
    let random = Math.floor(Math.random() * choices.length);
    const compChoice = choices[random];
    return compChoice;
}
// Playround function return a message according to the given coditions
function playRound(playerSelection, compChoice) {
    let player = playerSelection.toLowerCase();
    let computer = compChoice.toLowerCase();
    let message = "";

    if (player == computer) {
        message = "Tie , You both choose same!"

    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            message = "you lose!, paper beat rock"

        }
        else {
            message = "you won !rock beat sisccor"

        }
    }

    else if (player == "sicssor") {
        if (computer == "paper") {
            message = "you won ! sicssor beat paper"

        }
        else {
            message = "you lose ! rock beat sicssor."

        }
    }


    else if (player == "paper") {
        if (computer == "rock") {
            message = "you won ! paper beat rock."

        }
        else {
            message = "you lose ! sicssor beat paper"

        }
    }


    return message;
}

// Create a div container

const container = document.querySelector("#container");

// button for the user to select their choice;
const btn1 = document.createElement("button");
btn1.id = "btnId1";
const btn2 = document.createElement("button");
btn2.id = "btnId2";
const btn3 = document.createElement("button");
btn3.id = "btnId3";
// all button added to the div container
container.appendChild(btn1)
container.appendChild(btn2)
container.appendChild(btn3)
// Assigning the text to the buttons
btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Sicssor";
// iterate the all buttons
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    // added event listner to the button which is single click to select the player choice
    button.addEventListener("click", () => {

        const playerSelection = button.textContent;

        const computerSelection = getComputerChoice();//computer random choice generator function is called;

        const result = playRound(playerSelection, computerSelection); //playround fucntion is called to get the adject result of the one round 

        resultString.textContent = result;

        scoreAdd(); //score added function is called to add the score of the player and computer and determind the winner at the end..
    });
});

const resultString = document.createElement("div");
resultString.id = "result";
container.appendChild(resultString);


const runningScore = document.createElement("div");
runningScore.id = "score";
container.appendChild(runningScore);
// initializing the player and computerscore with 0
let playerScore = 0;
let computerScore = 0;

const playerCount = document.createElement("p");
playerCount.innerHTML = "Player Score " + playerScore;
runningScore.appendChild(playerCount);

const computerCount = document.createElement("p");
computerCount.innerHTML = "computer Score " + computerScore;
runningScore.appendChild(computerCount);

const resetButton = document.createElement("button");
resetButton.id = "resetButton";
resetButton.innerHTML = "Replay";

const resultShow = document.createElement("p");
resultShow.id = "resultShow";
const resultScore = document.createElement("p");
resultScore.id = "resultScore";

console.log(resultString);

// score added function  which keeps increment the score of computer and score untill one of them reac to the 5time won or lose ,
function scoreAdd() {
    if (resultString.textContent.includes("won")) {
        playerScore++;
    }
    else if (resultString.textContent.includes("lose")) {
        computerScore++;
    }
// condition to check wether computer won the match or player
    if (computerScore >= 5) {
        resultShow.innerHTML = "Computer Won!";
        resultScore.innerHTML = "Your Score: " + playerScore + "Computer Score " + computerScore;

        playerScore = 0;
        computerScore = 0;
        container.appendChild(resultShow);
        container.appendChild(resultScore);
        container.appendChild(resetButton);
    }
    else if (playerScore >= 5) {
        resultShow.innerHTML = "You WOn !";
        resultScore.innerHTML = "Computer Score: " + computerScore + "Player Score: " + playerScore;
        playerScore = 0;
        computerScore = 0;
        container.appendChild(resultShow);
        container.appendChild(resultScore);
        container.appendChild(resetButton);
    }
// diplaying the player and computer score at the end.
    playerCount.innerHTML = "Player Score: " + playerScore;
    computerCount.innerHTML = "Computer Score: " + computerScore;


}


// reset function to remove reinitialize the all attributes .
function reset() {
    playerScore = 0;
    computerScore = 0;
    resultString.textContent = "";
    resultShow.innerHTML = "";
    resultScore.innerHTML = "";
    playerCount.innerHTML = "Player Score:0";
    computerCount.innerHTML = "Computer Score :0";
    container.removeChild(resetButton)
}
// reset button to replay the game.
resetButton.addEventListener("click", () => {
    reset();
});



