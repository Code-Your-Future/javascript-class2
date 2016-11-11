// code here
var sum = function(num1, num2){
	return num1 + num2 ;
}
var userInput = [];
for(var i=0; i <2; i++){
	userInput.push(parseInt(prompt("Please insert an integer number ")));
}
console.log("The sum of two number will be : " + sum(userInput[0], userInput[1]));