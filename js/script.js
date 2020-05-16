console.log("DESAFIO PRÁTICO 1");

var slideRed = document.querySelector("#rangeRed");
var slideGreen = document.querySelector("#rangeGreen");
var slideBlue = document.querySelector("#rangeBlue");

window.addEventListener("load", main);

function main() {
  slideRed.addEventListener("change", pushRed);
  slideGreen.addEventListener("change", pushGreen);
  slideBlue.addEventListener("change", pushBlue);

  applyColor();
}

function pushRed() {
  document.querySelector("#textRed").value = this.value;
  applyColor();
}

function pushGreen() {
  document.querySelector("#textGreen").value = this.value;
  applyColor();
}

function pushBlue() {
  document.querySelector("#textBlue").value = this.value;
  applyColor();
}

function applyColor() {
  document.querySelector("#textRed").value = slideRed.value;
  document.querySelector("#textGreen").value = slideGreen.value;
  document.querySelector("#textBlue").value = slideBlue.value;

  document.querySelector(
    "#divRGB"
  ).style.backgroundColor = `rgb(${slideRed.value},${slideGreen.value},${slideBlue.value})`;
}
