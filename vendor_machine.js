var secretPhrase = "supermachineopen";
var passPharse = prompt("Please enter the Magic Secret Phase");
    vendorMachineServe (passPharse);
    function vendorMachineServe (passPharse){
        if(passPharse === secretPhrase){
            var userOption = parseInt(prompt(" Select your order: 1-cheesecake, 2-pizza, 3-coke"));
            orderServe(userOption);
        } else{
            document.write("Oh no, you don't know the secret." +"<br />");
            document.write("GoodBye" +"<br />");
        }
    }
 
function orderServe(userOption) {
    switch(userOption){
        case 1:
        document.write("I am serving the cheesecake" +"<br />");
        break;
        case 2:
        document.write("I am serving the pizza" +"<br />");
        break;
        case 3:
        document.write("I am serving the coke" +"<br />");        
        break;
        default:
        document.write("Please choose the order from 1 to 3" +"<br />");
        break;
    }
}