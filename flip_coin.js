// code here
document.write("Head Tail Exercise " + "<br />");
//tail=0
//head=1

function flipCoin(){
	return Math.floor(Math.random() *2);
}
while(flipCoin() === 0){
	document.write("Tail, not lucky this time, trying again..." + "<br />");
}
document.write("We found a head" + "<br>");