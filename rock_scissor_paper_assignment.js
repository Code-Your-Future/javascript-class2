
var computerChoice;
var score = 0;
var round = 1;
var imageList = ["images/rock.png","images/scissors.png","images/paper.png"];

function play(usrOptGroupName){
	if(round!=4){
		compare	(getUserChoice(usrOptGroupName), getComputerChoice());
		document.getElementById("round").innerHTML = "Round : "+round;
		round++;
	}else{
		alert("Round completed, restarting ... the game");
		clearFilds()
	}
}

function clearFilds(){
	score=0;
	round=0;
	document.getElementById("info").innerHTML ="";
	document.getElementById("score").innerHTML ="";
	document.getElementById("round").innerHTML ="";
	document.getElementById("imgUser").innerHTML ="src =''" ;
	document.getElementById("imgComp").innerHTML ="src =''" ;
}

function getUserChoice(optName){
	var allOptionButton = document.getElementsByName(optName);
	var size = allOptionButton.length;

	for(var i=0; i<size; i++){
		if(allOptionButton[i].checked){
			return allOptionButton[i].value;
			break;
		}
	}
	
}

function getComputerChoice(){
	
	computerChoice= parseFloat(Math.random().toFixed(2));

	if (computerChoice > 0 && computerChoice < 0.33){
		computerChoice = 0;
	}else if (computerChoice > 0.34 && computerChoice < 0.66){
		computerChoice = 1;
	}else if(computerChoice > 0.67 && computerChoice < 1){
		computerChoice = 2;
	}else{

	}
	
	return computerChoice;
}

function compare(userChoice,computerChoice){
	
	if (userChoice === 2 && computerChoice ===0){
		getImage(userChoice, computerChoice);
		document.getElementById("info").innerHTML ="User Win!...";
		document.getElementById("score").innerHTML ="Your score : " + score + 10;
	}else if (userChoice === 0 && computerChoice ===1){
		getImage(userChoice, computerChoice);
		document.getElementById("info").innerHTML ="User Win!...";
		document.getElementById("score").innerHTML ="Your score : " + score + 10 ;
	}else if (userChoice === 1 && computerChoice ===2){
		getImage(userChoice, computerChoice);
		document.getElementById("info").innerHTML ="User Win!...";
		document.getElementById("score").innerHTML ="Your score : " + score + 10;
	}else if (userChoice === computerChoice) {
		document.getElementById("info").innerHTML ="Tie...";
	}else{
		document.getElementById("info").innerHTML ="Computer Win...";
		document.getElementById("score").innerHTML ="Your score : " + score;
	}

}

function getImage(imgIdUser, imgIdComp){
	var imageUser = document.getElementById("imgUser");
	var imageComp = document.getElementById("imgComp");
	imageUser.innerHTML=" src=" + imageList[imgIdUser];
	imageComp.innerHTML=" src=" + imageList[imgIdComp];
}

