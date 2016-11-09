var userTurn = prompt('Please choose rock, paper or scissors');
var computerTurn = Math.random ();
if (computerTurn <= 0.33) {
	computerTurn = 'rock';
}
else if (0.34 <= computerTurn <= 0.66) {
	computerTurn = 'scissors';
}
else {
	computerTurn = 'paper';
}

turn1 = userTurn;
turn2 = computerTurn;

function compare(turn1, turn2) {
	if (turn1 === turn2) {
		return('The result is a tie!');
	}

	if (turn1 === 'rock') {
		if (turn2 === 'scissors') {
			return('rock beats scissors');
		}
		else {
			return('paper wins');
		}
	}

	if (turn1 === 'paper') {
		if (turn2 === 'rock') {
			return('paper beats rock');
		}
		else {
			return('scissors wins');
		}
	}

	if (turn1 === 'scissors') {
		if (turn2 === 'rock') {
			return('rock beats scissors');
		}
		else {
			return('scissors wins');
		}
		
	}
}

document.write(compare(turn1,turn2));