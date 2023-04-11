let comenzarJuego = document.getElementById("comenzarJuego");
let formContainer = document.getElementById("formContainer");
let juegoComenzado = false;
const randomNumber = Math.floor(Math.random() * 100) + 1;

comenzarJuego.addEventListener("click", () => {
  if (!juegoComenzado) {
    juego();
    juegoComenzado = true;
  }
});

function juego() {
    alert("Se ha generado un numero aleatorio!")
  let form = document.createElement("form");
  form.innerHTML = ` <div class="w-50 m-auto">
    <label for="numeroInput">Ingrese un numero del 1 al 100 !!</label>
    <input type="text" class="form-control" id="numeroInput">
  </div>
  <div class="m-auto w-50">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>`;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    verificarNumero();
  });
  formContainer.appendChild(form);
}

function verificarNumero() {
  let numeroInput = document.querySelector("#numeroInput").value;
  if (numeroInput == randomNumber) {
    alert("¡Adivinaste el número!");
  } else if (numeroInput > randomNumber) {
    alert("El número que ingresaste es mayor que el número a adivinar");
  } else {
    alert("El número que ingresaste es menor que el número a adivinar");
  }
}
