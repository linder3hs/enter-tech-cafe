// // alert("Primer mensaje usando JS");
// // SI queremos que el usuario escriba algo podemos usar la function prompt
// // const nombreDeUsuario = prompt("Hola, escribe tu nombre para iniciar!");

// // const colorDeFondo = prompt("Ingresa un color de fondo");
// // console.log(colorDeFondo);
// // // Para poder modificar el color de fondo uso CSS desde JS
// // document.body.style.backgroundColor = colorDeFondo;

// // Paso1: Buscar al elemento con el id input-color
// const inputColor = document.getElementById("input-color");
// console.log(inputColor);
// // Paso2: Escuchar el evento que captura el cambio de color
// inputColor.addEventListener("input", function () {
//   // quiero imprimir el valor del input
//   console.log(inputColor.value);
//   document.body.style.backgroundColor = inputColor.value;
// });

// // Ejemplo clasico: Escribir la edad del usuario y si el usario es mayor de
// // edad, dejarlo pero si no debemos elminiar todo el contenido de la pagina
// const edad = prompt("Ingresa la edad");
// // Los prompt solo retornar string
// console.log(edad, typeof edad);
// // conviertir el string a un numero
// const edadNumber = parseInt(edad); // NaN (Not a Number) "10" => 10

// // crear una condificional para validar que la conversión a number fue existosa
// // if = si (condicional)
// if (isNaN(edadNumber) === false) {
//   // ENTONCES LA CONVERSION FUE EXISTOSA
//   // DEBEMOS EVALUAR SI LA EDAD >= 18 ENTONCES LO DEJO PASA SI NO PONGO TODO EN BLANCO
//   if (edadNumber >= 18) {
//     console.log("Es mayor de edad");
//   } else {
//     document.body.style.display = "none";
//   }
// } else {
//   // HAGO ALGO PARA MANEJAR EL ERROR
//   alert("El valor ingresado no es un número válido");
// }

function cambiarColorDeFondo() {
  const bgColor = prompt(
    "Ingrese un color en ingles, hexadecimal o rgb para actualizar el bg del body"
  );

  document.body.style.backgroundColor = bgColor;
}

// invocar a la function
// cambiarColorDeFondo();

const gameArea = document.getElementById("game-area");
/*
function guardarNombresDeHermanos() {
  const cantidadDeHermanos = parseInt(
    prompt("Ingrese la cantidad de hermanos:")
  );

  const nombresDeHermanos = [];

  let contador = 0;
  while (contador < cantidadDeHermanos) {
    // preguntando el nombre al usuario
    const nombreDeHermano = prompt("Ingresa el nombre de tu hermano:");
    // guardado el nombre recibido dentro del arreglo usando a function push
    nombresDeHermanos.push(nombreDeHermano);
    contador++;
  }

  // vamos a crear una lista ordenada
  const listaOrdenada = document.createElement("ol");
  listaOrdenada.style.marginLeft = "40px";
  listaOrdenada.style.marginTop = "20px";

  for (let nombre of nombresDeHermanos) {
    const listItem = document.createElement("li");
    listItem.textContent = nombre;

    listaOrdenada.appendChild(listItem);
  }

  gameArea.appendChild(listaOrdenada);
}

*/

function guardarNombresDeHermanos() {
  const cantidadDeHermanos = parseInt(
    prompt("Ingrese la cantidad de hermanos:")
  );

  let contador = 0;

  const listaOrdenada = document.createElement("ol");
  listaOrdenada.style.marginLeft = "40px";
  listaOrdenada.style.marginTop = "20px";

  while (contador < cantidadDeHermanos) {
    const nombreDeHermano = prompt("Ingresa el nombre de tu hermano:");

    const listItem = document.createElement("li");
    listItem.textContent = nombreDeHermano;

    listaOrdenada.appendChild(listItem);

    contador++;
  }

  // ANTES DE INSERTA UN ELEMENTO DENTRO DE GAMEAREA DEBEMOS LIMPIARLO
  gameArea.innerHTML = "";
  // AGREAMOS LA NUVA LISTA DE HERMANOS
  gameArea.appendChild(listaOrdenada);
}
