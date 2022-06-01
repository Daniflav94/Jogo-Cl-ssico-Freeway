let yCarros = [20, 180, 80, 250];
let xCarros = [500, 500, 0, 0];
let velocidadeCarros = [2, 2.5, 1.3, 1];
let comprimentoCarro = 90;
let alturaCarro = 70;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 80, 60);
  }
}

function movimentaCarro(){
  for (let i = 0; i < 2; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
    xCarros[i] -= velocidadeCarros[i];
  for (let i = 2; i < 4; i = i + 1){
    xCarros[i]+= velocidadeCarros[i];
    xCarros[i] += velocidadeCarros[i];
  }
}
}

function voltaposicaocarro(){
  for (let i = 0; i < 2; i = i + 1){
    if (xCarros[i] < -50){
    xCarros[i] = 600
    }
  }
  for (let i = 2; i < 4; i = i + 1){
    if (xCarros[i] > 600){
    xCarros[i] = -50
  }
}
}