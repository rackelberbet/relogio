const horas = document.querySelector(".hr");
const minutos = document.querySelector(".min");
const segundos = document.querySelector(".sec");

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function exibirHorario() {
  let dia = new Date();
  let horaDoDia = dia.getHours();
  let minutoDoDia = dia.getMinutes();
  let segundosDoDia = dia.getSeconds();

  horas.innerHTML = zeroAEsquerda(horaDoDia);
  minutos.innerHTML = zeroAEsquerda(minutoDoDia);
  segundos.innerHTML = zeroAEsquerda(segundosDoDia);
}

setInterval(exibirHorario, 1000);
exibirHorario();
