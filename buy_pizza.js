// code here
var myMoney=prompt('How much do you have?');
var pizzaPrice= 5;
if (myMoney>5){
	console.log('cool you can get at least one pizza');
}else{
	var moneyNeeded= 5 - myMoney;
	console.log('you still need '+moneyNeeded+' $ to get at least one pizza');
}
