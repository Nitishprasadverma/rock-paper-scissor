function getComputerChoice() {
    const choices = ["Rock", "Sicssor", "Paper"];
    let random = Math.floor(Math.random() * choices.length);
    const compChoice = choices[random];
    return compChoice;
}

// getComputerChoice();

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


// function playGame() {
//     let round = parseInt(prompt("Enter no. of round"));
//     let result = "";
//     let playerResult = 0;
//     let comresult = 0;
//     for (i = 1; i <= round; i++) {
//         // let playerSelection = prompt("Choose one of 'rock','paper'and 'sicssor' :");
//         let computerSelection = getComputerChoice();

//         result = playRound(playerSelection, computerSelection);

//         // console.log(result);
//         // prompt(result.message);
//         alert(result.message)
//         playerscore = result.playerScore;
//         computerScore = result.computerScore;
//         if (computerScore == 1) {
//             comresult++;
//         }
//         else if (playerscore == 1) {
//             playerResult++;
//         }


//     }

//     if (comresult > playerResult) {
//         alert("you lose the game dude!");
//     }
//     else if (comresult == playerResult) {
//         alert( "shit u both score same")
//     }
//     else {
//         alert("you won the game boss!");
//     }
// }
// playGame();

const container = document.querySelector("#container");


const btn1 = document.createElement("button");
btn1.id = "btnId1";
const btn2 = document.createElement("button");
btn2.id = "btnId2";
const btn3 = document.createElement("button");
btn3.id = "btnId3";

container.appendChild(btn1)
container.appendChild(btn2)
container.appendChild(btn3)

btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Sicssor";

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const playerSelection = button.textContent;

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        resultString.textContent = result;

        scoreAdd();
    });
});

const resultString = document.createElement("div");
resultString.id = "result";
container.appendChild(resultString);


const runningScore = document.createElement("div");
runningScore.id = "score";
container.appendChild(runningScore);

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


function scoreAdd() {
    if (resultString.textContent.includes("won")) {
        playerScore++;
    }
    else if (resultString.textContent.includes("lose")) {
        computerScore++;
    }

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

    playerCount.innerHTML = "Player Score: " + playerScore;
    computerCount.innerHTML = "Computer Score: " + computerScore;


}

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

resetButton.addEventListener("click", () => {
    reset();
});



