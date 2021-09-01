
var xb; 
var yb1; 
var yb2; 
var yb3; 
var yVoltar;
var xVoltar; 
var larguraVoltar;
var alturaVoltar; 
var larguraB;
var alturaB; 
var suavizaB; 

var tela = 0; 
var fonteGeral; 
var imgFundo; 
var imgFundoCarta; 
var cartaVirada; 
var matrizCartasViradas = []; 
var matrizMatch = []; 
var matrizValores = [];
var valoresCartas = [];  
var imgCartas = []; 
var matrizImgCartas = [];
var matrizTamanho = 4; 

var imgCartaLargura = 102; 
var imgCartaAltura = 102; 
var posInicialX = 40;
var posInicialY = 80;

var linColAnterior = []; 

var contClicks = 0; 

function preload(){
  fonteGeral = loadFont("bouncy-black.otf");
  imgFundo = loadImage("imagens/fundo4.png");
  imgFundoCarta = loadImage("imagens/cartas/fundoCarta.png")
  imgCarta1 = loadImage("imagens/cartas/1.png");
  for (i=1; i<=8; i++){
    tempImg = loadImage("imagens/cartas/"+i+".png");
    imgCartas.push(tempImg);
    valoresCartas.push(i); 
    tempImg = loadImage("imagens/cartas/"+i+".1.png");
    imgCartas.push(tempImg);
    valoresCartas.push(i); 
  }
  cont=0;
  for (l=0; l<4; l++){
    tempImgLinha = []; 
    tempVCartaVirada = [];
    tempVValor = []; 
    tempVMath = []; 
    for (c=0; c<4; c++){
      tempImgLinha[c] = imgCartas[cont]; 
      tempVValor[c] = valoresCartas[cont]; 
      tempVCartaVirada[c] = false; 
      tempVMath[c] = false; 
      cont++;  
    }
    matrizCartasViradas[l] = tempVCartaVirada; 
    matrizImgCartas[l] = tempImgLinha;
    matrizValores[l] = tempVValor; 
    matrizMatch[l] = tempVMath; 
  }
}


function setup() {
  createCanvas(500, 500);
  cartaVirada = true; 
  xb = 150; 
  yb1 = 200; 
  yb2 = 300; 
  yb3 = 400;
  yVoltar = 340; 
  xVoltar = 270; 
  larguraB = 200; 
  larguraVoltar = 100;
  alturaVoltar = 40;
  alturaB = 60; 
  suavizaB = 12; 

  console.log(matrizMatch); 
}

function telaMenu() {
  //background(220);
  image(imgFundo,0,0)
  textFont(fonteGeral);

  textSize(40);
  fill("#FFDFC9");
  strokeWeight(5); 
  text("Juego", 180, 80);
  text("Del Memoria", 110, 130); 
  strokeWeight(3)  

  // Botão de Créditos 
  fill(100)  
  if ( mouseY > yb1 && mouseY < yb1 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
    fill(203,100,104)
  }
  rect(xb,yb1,larguraB,alturaB,suavizaB); 
  textSize(28);
  fill("#FF8303")
  stroke(30)
  text("Jogar",xb+35,yb1+40);
  

  // Botão de Instruções
  fill(100)  
  if ( mouseY > yb2 && mouseY < yb2 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
    fill(150,200,150)
  }
  rect(xb,yb2,larguraB,alturaB,suavizaB); 
  textSize(28);
  fill("#FF8303")
  stroke(30)
  text("Instruções", xb+15,yb2+40);


  // Botão de Créditos 
  fill(100)  
  if ( mouseY > yb3 && mouseY < yb3 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
    fill(203,100,104)
  }
  rect(xb,yb3,larguraB,alturaB,suavizaB); 
  textSize(28);
  fill("#FF8303")
  stroke(30)
  text("Créditos",xb+35,yb3+40);
   

  fill(255)
}

function telaCreditos() {
  background(0);
  fill(255);
  textSize(32);
  text("Tela Créditos", 50, 50 );

  //botão voltar  
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
    fill(250,200,150);
    if(mouseIsPressed){
      tela = 0; 
    }
  }
  else {
    noFill() 
  }
  rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB); 
  textSize(18);
  text("Voltar",xVoltar+10,yVoltar+25)
}



function draw() {
  if ( tela == 0 ) { 
    telaMenu(); 
  }  
  if ( tela == 1 ){
    telaDoJogo(); 
  }
  if ( tela == 2){
    telaInstrucoes(); 
  }
  if (tela == 3){
    telaCreditos(); 
  }
}

function convertePosMousePosMatriz(mx,my){
  mx = mx - posInicialX;
  my = my - posInicialY; 
  let posC = parseInt(mx/imgCartaLargura); 
  let posL = parseInt(my/imgCartaAltura); 
  console.log(posL+" "+posC); 
  posLC = [];
  posLC[0] = posL;
  posLC[1] = posC; 
  return posLC; 

}

function mostraCartas() {


  
  //posX = posInicialX
  let posY = posInicialY 
  for (l=0; l<4; l++) { 
    let posX = posInicialX
    for (c=0; c<4; c++) { 
      if ( matrizCartasViradas[l][c] || matrizMatch[l][c] ){
        image(matrizImgCartas[l][c],posX,posY);
      }
      else {
        image(imgFundoCarta,posX,posY,100,100);
      }
      posX = posX + imgCartaLargura 
    }
    posY = posY + imgCartaAltura
  }

   
}

function telaDoJogo(){
  background(0);
  //convertePosMousePosMatriz(mouseX,mouseY); 
  /*
  if (cartaVirada)
    image(matrizImgCartas[0][1],10,50);
  else 
    image(imgFundoCarta,10,50,100,100);
  */
  mostraCartas();

}

function telaInstrucoes() {
  background(0);
  fill(255);
  textSize(32);
  text("Tela Instruções", 50, 50 );

  //botão voltar 
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
    fill(250,200,150);
    if(mouseIsPressed){
      tela = 0; 
    }
  }
  else {
    noFill() 
  }
  rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB); 
  textSize(18);
  text("Voltar",xVoltar+10,yVoltar+25)
}


function mouseClicked() { 
  if ( tela == 0 ){
    if ( mouseY > yb1 && mouseY < yb1 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
      console.log("Botão 1")
      tela = 1
    }
    else {
      if ( mouseY > yb2 && mouseY < yb2 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
        console.log("Botão 2")
        tela = 2
      }
      else {
        if ( mouseY > yb3 && mouseY < yb3 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
          console.log("Botão 2")
          tela = 3
        }
      }
    }
  } else {
    if ( tela == 1) {
      //cartaVirada = ! cartaVirada
      linCol = convertePosMousePosMatriz(mouseX,mouseY);
      console.log(linCol);
      matrizCartasViradas[linCol[0]][linCol[1]] = true; 
      contClicks = contClicks + 1; 
      console.log("Cliques: "+contClicks);
      if(contClicks == 2 ){
        if (matrizValores[linCol[0]][linCol[1]] == matrizValores[linColAnterior[0]][linColAnterior[1]]){
          console.log(matrizMatch); 
          matrizMatch[linCol[0]][linCol[1]] = true; 
          matrizMatch[linColAnterior[0]][linColAnterior[1]] = true; 
        }
      }
      if ( contClicks > 2 ){ 
        // marca todoas as cartas como desviradas 
        for ( l = 0; l<matrizTamanho; l++ ){
          for( c = 0; c<matrizTamanho; c++ ){
            matrizCartasViradas[l][c] = false; 
          }
        }
        matrizCartasViradas[linCol[0]][linCol[1]] = true;
        contClicks = 1; 
      }
      if (contClicks == 1 ){
        linColAnterior = linCol; 
      } 
    }
  } 
  
}

function keyPressed() {
  if (tela === 1 || tela === 2  ) {
    if ( keyCode === ESCAPE ){
      tela = 0
    }
  }

}