function guessANumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout

    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let playerTrials = 6;



    let recursiveAsyncReadLine = function () {
        if (playerTrials !== 0) {
            console.log(`You have ${playerTrials} trials left`);
            readline.question('Guess the number (0-100): ', number => {
                guess = Number(number);

                if (guess <= 100 && guess >= 0) {
                    if (guess == computerGuess) {
                        console.log('You guess it!');
                        return readline.close();
                    } else if (guess > computerGuess) {
                        console.log('Too high!\n');
                        playerTrials--;
                        recursiveAsyncReadLine()
                    } else if (guess < computerGuess) {
                        console.log('Too low!\n');
                        playerTrials--;
                        recursiveAsyncReadLine()
                    }

                }

            });
        } else {
            console.log('Sory! You Lose!');
            return readline.close();
        }
    }





    recursiveAsyncReadLine();

}

guessANumber()
