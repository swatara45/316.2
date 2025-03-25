let solution = Math.floor(Math.random() * 50) * 2 + 2;  // Random multiple of 2 between 2 and 100
alert('Do you want to play a game? Guess any multiple of 2 between 2 and 100.');

for (let i = 0; i < 5; i++) {  // Give the user 5 attempts
    let answer = parseInt(prompt('Guess any multiple of 2 between 2 and 100:'));

    if (answer === solution) {
        alert('You win! The correct multiple of 2 was ' + solution + '.');
        break;  // Exit the loop if the user guesses correctly
    } else if (answer > solution) {
        alert('Guess lower');
    } else {
        alert('Guess higher');
    }

    if (i === 4) {  // If it's the last guess (5th attempt, i = 4)
        alert('Sorry, you lost! The correct multiple of 2 was ' + solution + '.');
    }
}