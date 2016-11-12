// code here
var secretPhrase="supermachineopen";
var userPhrase=prompt("Please enter the magic secret phase");
vendorMachineServe (userPhrase);
function vendorMachineServe (userPhrase) {
    if(userPhrase===secretPhrase){
        var userOption=parseInt(prompt("can you please select your order number from the list:\n1-cheesecake\n2-pizza \n3-cook?"));
        showinResult(userOption);
    }else{
        console.log("Oh no, you don't know the secret.");
    }
}

function printingResult(userOption) {
    
    switch(userOption){
        case 1:
        var result1 = "you will get cheesecake";
        return result1;
        break;
        case 2:
        var result2 = "you will get pizza";
        return result2;
        break;
        case 3:var result3 ="you will get cook";
        return result3;
        break;
    }
}
