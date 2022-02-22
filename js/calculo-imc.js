var paciente = document.querySelectorAll(".paciente");

console.log(paciente);

for (var i = 0; i < paciente.length; i++) {
  var pacientes = paciente[i];

  var tdPeso = pacientes.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 300) {
    console.log("Peso invalido, verifique suas informações!");
    pesoValido = false;
    tdImc.textContent = "Peso invalido";
    pacientes.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura invalida, verifique suas informações!");
    alturaValida = false;
    tdImc.textContent = "Altura invalido";
    pacientes.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    var imc = calculaIMC(peso, altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

function calculaIMC(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc;
}
