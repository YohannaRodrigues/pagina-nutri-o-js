var paciente = document.querySelectorAll(".paciente");

console.log(paciente);

for (var i = 0; i < paciente.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  console.log(peso);

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  console.log(altura);

  var tdImc = paciente.querySelector(".info-imc");

  console.log(tdImc);

  var pesoValido = true;
  var alturaValida = true;

  console.log(pesoValido);
  console.log(alturaValida);

  if (peso <= 0 || peso >= 300) {
    console.log("Peso invalido, verifique suas informações!");
    pesoValido = false;
    tdImc.textContent = "Peso invalido";
    paciente.style.color = "red";
  }
  console.log("oiiii");

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura invalida, verifique suas informações!");
    alturaValida = false;
    tdImc.textContent = "Altura invalido";
    paciente.style.color = "lightcoral";
  }
  console.log("oiiii");

  if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
  console.log("oiiii");
}
