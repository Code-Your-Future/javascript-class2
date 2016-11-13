// code here
var coinFace = Math.floor(Math.random() * 2);
while(coinFace === 0){
    console.log("The coin shows Tail :( sorry you arn\'t lucky, Flipp again.");
    var coinFace = Math.floor(Math.random() * 2);
}
console.log("The coin shows Head .");
