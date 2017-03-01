//head = 1
//tail = 0
//var coinFace = Math.floor(Math.random() * 2);
//document.write ('coin face is: ' +coinFace);
while (Math.floor(Math.random() * 2)  === 0){
	document.write ('Tail, not lucky this time ' + '<br />');
}
document.write ('We found it ' + '<br />');



function flipCoin() {
	return Math.floor(Math.random() * 2);
}
while (flipCoin() === 0) {
	document.write ('Tail, not lucky this time ' + '<br />');
}
document.write ('We found it ' + '<br />');