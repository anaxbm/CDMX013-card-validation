import validator from "./validator.js"; /* default se puede colocar asi */
/*import {perro}from './validator.js'; /*import que no es default va con {}*/

/*console.log(validator); mostrar objeto*/

const cardNumber = document.querySelector("#number");
const form = document.querySelector(".validation");
const valid = document.querySelector(".valid");
const notvalid = document.querySelector(".notvalid");

/*console.log(cardNumber)*/

form.addEventListener("submit", function (event) {
  event.preventDefault(); /* previniendo que la pagina haga reload*/
  let cardNumberValue = cardNumber.value;
  let validation =
    validator.isValid(
      cardNumberValue
    ); /* guardando lo que regresa funcion isValid */
  let cardNumberMasked = validator.maskify(cardNumberValue);
  /* mandando valor a función isValid, mandando a ejectutar, let validation guarda el valor que regresa isValid*/
  if (validation) {
    valid.style.display = "block";
    notvalid.style.display = "none";
  } else {
    valid.style.display = "none";
    notvalid.style.display = "block";
  }
  cardNumber.value = cardNumberMasked;
});
