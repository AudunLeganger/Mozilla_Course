// Your JavaScript goes here
/*
Logic plan
1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once the number has been provided, store it somewhere the player can see.
5. Check whether the number is correct.

6. If player guesses the number.
    I) Display congratulations message.
    II) Stop the player from being able to enter more guesses.
    III) Display control allowing the player to restart the game.

7. If the player does not guess the number:
    I) Tell the player they were wrong, and where their guess was too high or too low.
    II) Allow player to enter another guess.
    III) Increment the turn number by 1.

8. If the player has no turns left:
    I) Tell the player the game is over.
    II) Stop the player from being able to enter more guesses.
    III) Display controls allowing the player to restart the game.

9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
*/
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (!isWithinInterval(userGuess)) {
    alert(
      "Guesses must be within the interval between 1 and 100 (inclusive). Try again."
    );
    resetGuessField();
    return;
  }

  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += `${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lastResult.style.backgroundColor = "#900000";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
      guesses.textContent += "(low) ";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
      guesses.textContent += "(high) ";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100 + 1);
}

function isWithinInterval(guess) {
  return guess <= 101 && guess >= 1;
}

function resetGuessField() {
  guessField.value = "";
  guessField.focus();
}
