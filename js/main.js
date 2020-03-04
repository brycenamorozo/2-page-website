var colorWell;
var defaultColor = "#0000ff";
let filler;
let l;

function titlename() {
  filler = document.getElementById("inputa").value;
  document.getElementById("outputa").innerHTML = filler;
}

function imagelink() {
  l = document.getElementById("inputb").value;
  document.getElementById("outputb").innerHTML = l;}

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var textarea = document.querySelector("textarea");

  if (textarea) {
    textarea.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("textarea").forEach(function(textarea) {
    textarea.style.color = event.target.value;
  });
}

