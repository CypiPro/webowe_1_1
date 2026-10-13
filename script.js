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

document.getElementById("ex2_text").addEventListener("change", (event) => {
  const kotek = document.getElementById("ex2_content");
  piesek = event.target;
  const re_letter = new RegExp("[a-zA-Z]");
  const re_special = new RegExp("[^A-Za-z0-9]");

  console.log(piesek.value.length);

  if (piesek.value.length != 9)
    kotek.innerHTML = "Długość numeru musi być równa 9";
  else if (re_letter.test(piesek.value))
    kotek.innerHTML = "Numer nie może zawierać liter";
  else if (re_special.test(piesek.value))
    kotek.innerHTML = "Numer nie może zawierać znaków specjalnych";
  else if (piesek.value.length == 9)
    kotek.innerHTML = "Numer telefonu jest poprawny";
});
