// code here
var chestSize=prompt('Please enter your chist size,between 91cm and 106cm');
if(chestSize>=91 && chestSize<96){
	console.log('your chest size is: '+chestSize+'cm so, it\' small');
}else if (chestSize>=96 && chestSize<101){
	console.log('your chest size is: '+chestSize+'cm so, it\' medium');
}else if(chestSize>=101 && chestSize<106){
	console.log('your chest size is: '+chestSize+'cm so, it\' larg');
}else{
	console.log('your chest size is:'+chestSize+'cm so, it\' xlarg')
}
