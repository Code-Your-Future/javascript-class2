// code here
var size = prompt("Please enter the size of the chest :");

if(size >= 91 && size < 96){
	console.log("The size is SMALL");
}else if(size >= 96 && size < 101){
	console.log("The size is MEDIUM");
}else if(size >= 101 && size < 106){
	console.log("The size is LARGE");
}else if(size >= 106){
	console.log("The size is XLARGE");
}else{
	console.log("Please call customer service ");
}
