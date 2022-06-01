// ator
let yAtor = 350
let xAtor = 280
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 40, 40);
}
  
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificacolisao(){
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor,4)
      if (colisao){
        voltaAtor();
        somColisao.play();
        if (meusPontos > 0){
        meusPontos -= 1;
        }
      }
  }
}

function voltaAtor(){
  yAtor = 350;
}

function mostraPontos(){
  textSize(37);
  fill(color(255,250,205));
  text(meusPontos, 280, 30);
}
function marcaPonto(){
  if(yAtor < 15){
    somPonto.play();
    meusPontos += 1;
    voltaAtor();
  }
}
function podeSeMover(){
  return yAtor < 350;
}

