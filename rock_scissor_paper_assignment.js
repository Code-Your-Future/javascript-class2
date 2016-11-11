var userChoice=prompt("Do you choose rock ,paper or scissors?");
var computerChoice=Math.random();

console.log(computerChoice);
if (computerChoice<=0.33) {
    computerChoice="rock";
} else if (0.34<=computerChoice<=0.66) {
    computerChoice="scissors";
} else {
    computerChoice="paper";
}
console.log(computerChoice);
console.log(userChoice);
if (userChoice === "paper" && computerChoice ==="scissors" || userChoice === "scissors" && computerChoice==="rock" || userChoice === "rock" && computerChoice === "paper") {
  console.log("computer has won!");
}else if(computerChoice === userChoice) {
  console.log("EVEN");
}else {
  console.log("You won!");
}
