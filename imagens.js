let imagemEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemAtor;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/cao3.png");
  imagemCarro1 = loadImage("Imagens/car1-1.png");
  imagemCarro2 = loadImage("Imagens/car2-1.png");
  imagemCarro3 = loadImage("Imagens/car3-1.png");
  imagemCarro4 = loadImage("Imagens/car4-1.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4];
  somTrilha = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
  somPonto = loadSound("Sons/pontos.wav");
}