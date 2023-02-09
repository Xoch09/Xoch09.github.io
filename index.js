import validator from './validator.js';

//console.log(validator);


const cardNumber = document.getElementById('cardnumber');
cardNumber.addEventListener('keypress', function (event) {
  const key = String.fromCharCode(event.charCode);
  if (isNaN(key)) {
    event.preventDefault()
  }
})


const botonValidar = document.getElementById("btn-validar");

botonValidar.addEventListener("click", function () {
  const cardNumber = document.getElementById("cardnumber").value;
  //crlconsole.log(cardNumber);
  //Marcaba errar porque declaré cardnumber y no clardNumber
  const result = document.getElementById("result");
  // si elinput es igual a cero, no se ponen datos, se regresará un texto como resultado que contenga el texto "ingrese sus datos"
  if (cardNumber ==="") {
    //innertex para escribir un mensaje de validación,no de tomaen cuenta como texto HTML//
    result.innerText = "lo siento, ingresa tus datos"
    //console.log(result.innerText) //para mostrar lo que se está haciendoen laconsola//
    return

  }
  document.getElementById("cardnumber").value=""

  //const especifica que su valor es constante y se inicia durante la declaración//
  const valid = validator.isValid(cardNumber)
  if (valid) {
    result.innerHTML = "¡Felicidades! </br> tu tarjeta terminación" +  validator.maskify(cardNumber) + "Es válida"
        
  }
  else {
    result.innerHTML = "¡Lo siento! tu tarjeta no es válida"
  }


}
)



