(function () {})();

document.getElementById("ex1_button").addEventListener("click", (event) => {
  const content_element = document.getElementById("ex1_content");
  var numbers = "";

  for (let i = 0; i < 10; i++) {
    numbers += i;
    if (i != 9) numbers += ",";
  }

  content_element.innerHTML = numbers;
});
