var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = dadosPacienteForm(form);

  var novoPaciente = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(novoPaciente);
});

function dadosPacienteForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(peso, altura).toFixed(2),
  };

  return paciente;
}

function montaTr(paciente) {
  var novoPaciente = document.createElement("tr");
  novoPaciente.classList.add("paciente");
  nomeTd.textContent = paciente.nome;

  var nomeTd = document.createElement("td");
  nomeTd.classList.add("info-nome");

  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  novoPaciente.appendChild(nomeTd);
  novoPaciente.appendChild(pesoTd);
  novoPaciente.appendChild(alturaTd);
  novoPaciente.appendChild(gorduraTd);
  novoPaciente.appendChild(imcTd);

  return novoPaciente;
}
