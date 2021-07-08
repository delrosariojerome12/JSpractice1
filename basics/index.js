let state = 0;
function add() {
  state++;
  document.getElementById("counter").innerHTML = state;
}
function minus() {
  state--;
  document.getElementById("counter").innerHTML = state;
}
// binary
function toBinary() {
  document.getElementById("counter").innerHTML = state.toString(2);
}
// decimal
function toDecimal() {
  document.getElementById("counter").innerHTML = state.toString(10);
}
// hexadecimal
function toHex() {
  document.getElementById("counter").innerHTML = state.toString(16);
}
// octal
function toOctal() {
  document.getElementById("counter").innerHTML = state.toString(8);
}