
var computerChoice;
var imageList = ["img/rock.png","img/scissors.png","img/paper.png"];

function play(usrOptGroupName){
	com(getUserChoice(usrOptGroup), getComputerChoice();)
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
	var = parseFloat(Math.random().toFixed(2));

	if (computerChoice > 0 && computerChoice < 0.33){
		document.write(".pic1 img").attr("src","img/rock.png");
		/*$("div.wrap2 h1").text("Paper beats rock").hide().fadeIn();
		userPoint = userPoint+10;*/
		computerChoice = 0;
	}
	}else if (computerChoice > 0.34 && computerChoice < 0.66){
		/*$(".pic1 img").attr("src","img/scissors.png").hide().fadeIn();	
		$("div.wrap2 h1").text("Rock beats Scissors").hide().fadeIn();
		userPoint = userPoint+10;*/
		computerChoice = 1;
	}else if(computerChoice > 0.67 && computerChoice < 1){
		/*$(".pic1 img").attr("src","img/paper.png").hide().fadeIn();
		$("div.wrap2 h1").text("Scissors beats paper").hide().fadeIn();
		userPoint = userPoint+10;*/
		computerChoice = 2;
	}else{

	}
	return computerChoice;
}

function compare(userChoice,computerChoice){
	
	if (userChoice === 2 && computerChoice ===0){

	}else if (userChoice === 0 && computerChoice ===1){

	}else if (userChoice === 1 && computerChoice ===2){

	}else {
		//computer win;
	}

}
/*
function getImage(imageId1, imageId2){
	return imageList[imageId1];
}

