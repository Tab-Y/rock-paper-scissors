// play rock paper scissors against CPU
// enter R, P, or S to signify choice of Rock, Paper, or scissors
// Computer chooses R, P, S in return
// play again option on win or lose
// see total wins, ties, and losses after each round

// MUST USE alert(), confirm(), and prompt() to collect user input
// CPU selection must be random
// How can you customize the appearance of the alert(), confirm(), and prompt() dialog boxes?

// scissors > paper || paper > rock || rock > lizard || lizard > Spock || Spock > scissors ||
//  scissors > lizard || Lizard > paper || paper > Spock || Spock > rock || rock > scissors

var choices = ["Scissors", "Paper", "Rock", "Lizard", "Spock"];
var results = [];
var isCorrect = [];
var winCount = [];
var lossCount = [];
var tieCount = [];

// prompt game of modified rock paper scissors
function playgame() {
    let playerChoice = prompt("Let's play! Please type:\nRock, Paper, Scissors, Lizard, or Spock.");
    validate();
// checks that user input is correct to check against array
    function validate() {
        if (choices.includes(playerChoice)) {
            isCorrect.push("true")
        }   else {
            return
        }
    }    
    
    
    if (isCorrect == "true"){
        confirm("Thank you! You have chosen " + playerChoice);
        isCorrect.pop();
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        alert("The Computer has chosen " + computerChoice);
        let result = checkWinner();
        results.unshift(result);
        alert(results[0]);
// sorts wins, losses, and ties
        if (results[0] == "Win") {
            winCount.unshift("Win");
        } else if (results[0] == "Lose") {
            lossCount.unshift("Lose");
        } else {
            tieCount.unshift("Tie");
        }

        alert("You've played " + results.length + " rounds.\nWins: " + winCount.length + "\nLosses: " + lossCount.length + "\nTies: " + tieCount.length);
        console.log(results);
        endScreen();
// adds loop with play again choice
        function endScreen() {
            var result = confirm("Play again?")
            if (result == true) {
                playgame()
            }
        }
// compares player input to the random computer choice
        function checkWinner(){
            if (playerChoice == "Scissors") {
                if (computerChoice == "Paper") {
                    return "Win"
                } else if (computerChoice == "Rock") {
                    return "Lose"
                } else if (computerChoice == "Lizard") {
                    return "Win"
                } else if (computerChoice == "Spock") {
                    return "Lose"
                } else {
                    return "Tie"
                }
            } else if (playerChoice == "Paper") {
                if (computerChoice == "Scissors") {
                    return "Lose"
                } else if (computerChoice == "Rock") {
                    return "Win"
                } else if (computerChoice == "Lizard") {
                    return "Lose"
                } else if (computerChoice == "Spock") {
                    return "Win"
                } else {
                    return "Tie"
                }
            } else if (playerChoice == "Rock") {
                if (computerChoice == "Scissors") {
                    return "Win"
                } else if (computerChoice == "Paper") {
                    return "Win"
                } else if (computerChoice == "Lizard") {
                    return "Lose"
                } else if (computerChoice == "Spock") {
                    return "Win"
                } else {
                    return "Tie"
                }
            } else if (playerChoice == "Lizard") {
                if (computerChoice == "scissors") {
                    return "Lose"
                } else if (computerChoice == "Paper") {
                    return "Win"
                } else if (computerChoice == "Rock") {
                    return "Lose"
                } else if (computerChoice == "Spock") {
                    return "Win"
                } else {
                    return "Tie"
                }
            } else if (playerChoice == "Spock") {
                if (computerChoice == "Scissors") {
                    return "Lose"
                } else if (computerChoice == "Paper") {
                    return "Win"
                } else if (computerChoice == "Rock") {
                    return "Lose"
                } else if (computerChoice == "Lizard") {
                    return "Win"
                } else {
                    return "Tie"
                }
            } else {
                return 
            }
        }
    } else {
        alert("wrong input detected.")
    }

}