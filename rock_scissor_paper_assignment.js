// code here
var userWin=0;
var computerWin=0;
for (var i=0; i<3;i++){
    if(userWin<2){
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.66) {
    computerChoice = "scissors";
} else {
    computerChoice = "paper";
} 
console.log("User choise is: " + userChoice);
console.log("Computer choise is: " + computerChoice);
console.log(compare(userChoice,computerChoice));
}
}
console.log("the rounds user won are: "+userWin);
console.log("the rounds computer won are: "+computerWin);
if(userWin>=2){
    console.log("the final winner is YOU");
}
if(computerWin>=2){
    console.log("the final winner is the COMPUTER");
}


function compare(choice1,choice2){
    if (choice1===choice2){
        return "************************The result is a tie!************************";
        userWin++;
        computerWin++;
        }if (choice1 === "rock"){
            if(choice2 === "scissors"){
                userWin++;
                return"************************the user wins************************" }
                else{
                    computerWin++;
                    return "************************the computer wins************************"}
            }if (choice1 === "paper"){
                if(choice2 === "rock"){
                    userWin++;
                    return "************************the user wins************************"}
                    else{
                        computerWin++;
                        return "************************the computer wins************************"}
                }
                if(choice1==="scissors"){
                    if(choice2==="paper"){
                        userWin++;
                        return "************************the user wins************************"}
                        else{
                            computerWin++;
                            return "************************the computer wins************************"}
                }
}
