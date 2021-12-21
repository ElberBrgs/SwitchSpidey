var valor = document.querySelector("#texto");

var btn = document
  .querySelector(".btn")
  .addEventListener("click", function (evt) {
    switch (valor.value) {
      case "Tobey Maguire":
      case "Tobey":
        document.write("<h2>Esse é o primeiro Homem Aranha!</h2>");
        break;
      case "Andrew Garfield":
      case "Andrew":
        document.write("<h2>Esse é o segundo Homem Aranha!!</h2>");
        break;
      case "Tom Holland":
      case "Tom":
        document.write("<h2>Esse é o terceiro Homem Aranha!!!</h2>");
        break;
      default:
        document.write(
          `<h2>Não é um dos amigões da vizinhança nos cinemas...</h2> `
        );
    }
  });
