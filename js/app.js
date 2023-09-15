let playGame = confirm("Shall we play rock, paper, scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase()
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                    : "scissors";
            const result = playerOne === computer ? "Tie game"
                : playerOne === "rock" && computer === 'paper'
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : playerOne === "paper" && computer === "scissors"
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                        : playerOne === "scissors" && computer === "rock"
                            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                            : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins`;
            alert(result);
            let playAgain = confirm("Play Again");
            playAgain ? location.reload() : alert('Ok thanks for claim.')
        } else {
            alert("You didn't rock, paper or scissors.")
        }
    } else {
        alert("I guess you changed your mind. Maybe next time...")
    }

} else {
    alert("OK, maybe next time... see you!")
}