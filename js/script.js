alert('Seja bem vindo ao nosso Site!');

function trocar(cor) {
  document.body.style.background = cor;
}


function mudar() {
  let novo = document.getElementById('idNome');
  document.getElementById('titulo');
  document.getElementById('titulo').innerHTML = novo.value;
}

function inserir() {
  let numero = document.getElementById('posicao').value - 1;
  let novo = document.getElementById('novo').value;
  document.getElementsByClassName('time')[numero].innerHTML = novo;
}