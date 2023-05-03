function guessANumber() {
    console.clear();
    

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout

    });


    let guess;
    let playerTrials = 10;
    let level = 1;
    let computerGuess = Math.floor(Math.random() * 100);
    
    let endGame = function () {
       
        readline.question("New Game? (Y/N) ", answer => {
            if (answer === "Y" || answer === "y") {
                console.clear();
                readline.close();
                guessANumber();
            } else {
                console.clear()
                console.log("Have a nice day!");
                return readline.close();
            }
        });
    };

    let recursiveAsyncReadLine = function () {

       
        console.log("Press Ctrl+C for Exit.\n");
       

        if (playerTrials !== 0) {
            console.log(`Level ${level} - You will win if you beat level 10!\n`);
            console.log(`You have ${playerTrials} trials left...`);

            readline.question(`Guess the number (0-${level * 100}): `, number => {
                guess = Number(number);

                if (guess <= (level * 100) && guess >= 0) {
                    if (guess == computerGuess) {
                        console.clear();
                        console.log('You guess it!');
                        level++;
                            if (level > 10) {
                                console.clear();
                                console.log("Congratulations! You beat the game!");
                                endGame();
                                return;                        
                            };

                        playerTrials += 3 * level;
                        console.log(`You gain ${3 * level} more trials. Good Luck!\n`);
                        computerGuess = Math.floor(Math.random() * (100 * level));
                        
                        recursiveAsyncReadLine();
                        // 
                    } else if (guess > computerGuess) {
                        console.clear()
                        console.log("Too high\n");
                        playerTrials--;
                        recursiveAsyncReadLine()
                    } else if (guess < computerGuess) {
                        console.clear()
                        console.log("Too low\n");
                        playerTrials--;
                        recursiveAsyncReadLine();
                    }

                } else {
                    console.clear()
                    console.log("Invalid input! Try again...");
                    recursiveAsyncReadLine();
                }

            });
        } else {
            console.log('Sorry! You Lose!\n');
            endGame();
            // return readline.close();
        }
    }

    recursiveAsyncReadLine();

}

guessANumber()
