var btn = document.querySelector("#click");

var textInput = document.querySelector("#txt");
var out = document.querySelector("#outputText");
var url = "https://api.funtranslations.com/translate/pirate.json";
btn.addEventListener("click", clickHandler);

function errorHandler(error) {
  alert(
    "Hmmm..This shouldn't be happening\nThere's something wrong with us.\nPlease try again later!"
  );
}

function computeURL(text) {
  return url + "?" + "text=" + text;
}

function clickHandler() {
  console.log(textInput.value);
  var text = textInput.value;
  console.log(text);
  fetch(computeURL(text))
    .then((response) => response.json())
    .then((json) => {
      var result = json.contents.translated;
      console.log(result);
      out.innerText = result;
    })
    .catch(errorHandler);
}
