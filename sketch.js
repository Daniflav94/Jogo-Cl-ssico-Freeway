
function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaposicaocarro();
  verificacolisao();
  mostraPontos();
  marcaPonto();
  podeSeMover();
  }



