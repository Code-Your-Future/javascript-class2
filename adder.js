var firstInput , secondInput;
function add(num1, num2) {
  // num1 = parseInt(prompt("something"));
  // num2 = parseInt(prompt("something"));
  firstInput = num1;
  secondInput = num2;
  return num1 + num2;
}
function print(message) {
  document.write("the outcome of adding " + firstInput + " to " + secondInput + " is: " + message + "<br />");
}
print(add(100,200));
print(add("Hello ", "Ehmed!"));
// you can do this as well
// the prompt (INPUT) function return string so you have to parse it INT or FLOAT
// var a = parseInt(prompt());
// var b = parseInt(prompt());
// console.log(a + b);
