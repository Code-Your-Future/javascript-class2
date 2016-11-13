// code here
var lightsOn = false;
function press() {
  if (lightsOn) {
    console.log('turn the lights off.');
    lightsOn = false;
  } else {
    console.log('turn the lights on.');
    lightsOn = true;
  }
}
