// code here
var secretPhrase = "supermachineopen";
var menu = [""]; 

var vendorMachineServe = function(passCode){
	if(passCode === secretPhrase){
		menu.push("cheesecake","pizza","coke");
		orderServe();
	}else {
		console.log("Oh no, you don't know the secret.");
	}
}

var orderServe = function(){
	var userChoice = parseInt(prompt("1-cheesecake, 2-pizza, 3-coke. Please enter the number: "));
	switch(userChoice){
		case 1:
			console.log("I am serving the food " + menu[userChoice]);
		break;
		case 2:
			console.log("I am serving the food " + menu[userChoice]);
		break;
		case 3:
			console.log("I am serving the drink " + menu[userChoice]);
		break;
		default:
			alert("Wrong choice, Please choose from 1 to 3 ");
	}
	
}

while(confirm("Wellcome to the Magic Vendor Machine, do you want to continue....?")){
	var code = prompt("Please enter the pass code","fasdf");
	vendorMachineServe(code);

}
	console.log("Goodbye!");