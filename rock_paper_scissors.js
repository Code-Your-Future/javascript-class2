var userChoice = prompt("Wanna Play a game of rock, paper or scissors?");
document.write("You Selected: " + userChoice);
document.write("<br>");
var computerChoice = Math.random();
	if (computerChoice <= 0.33) {
		computerChoice = "rock";
	} else if(computerChoice >= 0.34 && computerChoice <=0.67) {
		computerChoice = "paper";
	} else{
	computerChoice = "scissors";
	} 
document.write("Computer Selected: " + computerChoice);
document.write("<br>");
var compare = function (choice1, choice2) {
	if (choice1 === choice2) {
		return "It's a Stalemate - Try again!";
	} else if(choice1 === "rock") {
		if(choice2 === "scissors") {
			return "Rock wins";
		} else {
			return "Paper wins";
		}
	} else if(choice1 === "paper") {
		if(choice2 === "rock"){
			return "Paper wins";
		} else {
			return "Scissors wins";
		}
	} else if(choice1 ==="scissors"){
		if(choice2 === "rock"){
			return"Rock wins";
		} else {
			return "Scissors wins";
		}
	}
	else {
	   return alert("Oh Oh:( You need to improve your spelling! Try again!!!"); 
	}
};

document.write("And the Result is that..." + compare(userChoice, computerChoice));
document.write("<br>");  

