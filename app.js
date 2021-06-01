var btn = document.querySelector("#click");
console.log(btn);

var textInput = document.querySelector("#txt");
var textInitial = textInput.value;
var out = document.querySelector("#outputText");
var url = "https://api.funtranslations.com/translate/pirate.json";
btn.addEventListener("click", clickHandler);

function errorHandler(error) {
  alert(
    "Hmmm..This shouldn't be happening\nThere's something wrong with us.\nPlease try again later!"
  );
}

function clickHandler() {
  console.log(textInput.value);
  fetch(url + "?" + "text=" + textInitial)
    .then((res) => res.json())
    .then((res) => console.log(json.contents.translated))
    .catch(errorHandler);
}
