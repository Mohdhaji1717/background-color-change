const msg = document.getElementById("msg");
const rbtn = document.getElementById("red");
const body = document.getElementsByTagName("body")[0];
const random = document.getElementById("random");
function red() {
  body.style.backgroundColor = "red";
  msg.innerHTML = "The Background color is red";
}
function blue() {
  body.style.backgroundColor = "Blue";
  msg.innerHTML = "The Background color is Blue";
}
function green() {
  body.style.backgroundColor = "Green";
  msg.innerHTML = "The Background color is green";
}
function ran() {
const red = Math.random(Math.random() * 255);
const green = Math.random(Math.random() * 255);
const blue = Math.random(Math.random() * 255);
const color = `rgb(${red},${blue},${green})`
console.log("random");

}


