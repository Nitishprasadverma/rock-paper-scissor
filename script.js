function getComputerChoice() {
    const choices = ["Rock", "Sicssor", "Paper"];
    let random = Math.floor(Math.random() * choices.length);
    const compChoice = choices[random];
    return compChoice;
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let message = "";
    let playerScore = 0;

    let computerScore = 0;
    if (player == computer) {
        message = "Tie , You both choose same!"

    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            message = "you lose!, paper beat rock"
            computerScore++
        }
        else {
            message = "you won !rock beat sisccor"
            playerScore++
        }
    }

    else if (player == "sicssor") {
        if (computer == "paper") {
            message = "you won ! sicssor beat paper"
            playerScore++
        }
        else {
            message = "you lose ! rock beat sicssor."
            computerScore++
        }
    }


    else if (player == "paper") {
        if (computer == "rock") {
            message = "you won ! paper beat rock."
            playerScore++
        }
        else {
            message = "you lose ! sicssor beat paper"
            computerScore++
        }
    }


    return { playerScore, computerScore, message };
}

function playGame() {
    let round = parseInt(prompt("Enter no. of round"));
    let result = "";
    let playerResult = 0;
    let comresult = 0;
    for (i = 1; i <= round; i++) {
        let playerSelection = prompt("Choose one of 'rock','paper'and 'sicssor' :");
        let computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);

        // console.log(result);
        // prompt(result.message);
        alert(result.message)
        playerscore = result.playerScore;
        computerScore = result.computerScore;
        if (computerScore == 1) {
            comresult++;
        }
        else if (playerscore == 1) {
            playerResult++;
        }

        // console.log("com:", comresult);
        // console.log("player:", playerResult);
        //         prompt(playerResult)
        // prompt(comresult)
    }
         // console.log("comf:", comresult);
         // console.log("playerf:", playerResult);
    if (comresult > playerResult) {
        alert("you lose the game dude!");
    }
    else if (comresult == playerResult) {
        alert( "shit u both score same")
    }
    else {
        alert("you won the game boss!");
    }
}
// console.log(playRound(playerSelection,computerSelection));
playGame();