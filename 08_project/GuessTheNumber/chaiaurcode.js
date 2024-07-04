/** @format */
const randomNumber = parseInt(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.gauesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
	submit.addEventListener('click', (e) => {
		e.preventDefault();
		const guess = parseInt(userInput.value);
		console.log(guess);
		validateGuess(guess);
	});
}

function validateGuess(guess) {
	if (isNaN(guess)) {
		displayMessage(`Please Enter va vadilate Number`);
	} else if (guess < 1) {
		displayMessage(`Please Enter More than 1`);
	} else if (guess > 100) {
		displayMessage(`Please Enter less than 100 `);
	} else {
		prevGuess.push(guess);
		if (numGuess === 10) {
			displayGuess(guess); // Ensure last guess is displayed
			displayMessage(`Game Over! The random number was ${randomNumber}`);
			endGame();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}
function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage(`you guess it right`);
		endGame();
	} else if (guess < randomNumber) {
		displayMessage(`No. is too low`);
	} else if (guess > randomNumber) {
		displayMessage(`no. is high`);
	}
}
function displayGuess(guess) {
	userInput.value = '';
	guessSlot.innerHTML += `${guess},  `;
	numGuess++;
	guessRemaining = `${11 - numGuess}`
	if (guessRemaining < 0) {
		guessRemaining = 0
	}
	lastResult.innerHTML = `${guessRemaining} `;
}
function displayMessage(message) {
	lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
	userInput.value = '';
	userInput.setAttribute('disabled', '');
	p.classList.add('button');
	p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
	startOver.appendChild(p);
	playGame = false;
	newGame();
}
function newGame() {
	 const newGameBtn = document.querySelector('#newGame');
        newGameBtn.addEventListener("click", function() {
            let randomNumber = parseInt(Math.random() * 100) + 1;
            prevGuess = [];
            numGuess = 1;
            guessSlot.textContent = 'Previous guesses: ';
            lastResult.textContent = '';
            lowOrHi.textContent = '';
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
	});
}
