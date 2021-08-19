
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

function preload(){
  fonteGeral = loadFont("bouncy-black.otf");
  imgFundo = loadImage("imagens/fundo4.png");
}


function setup() {
  createCanvas(400, 400);
  xb = 100; 
  yb1 = 150; 
  yb2 = 250; 
  yb3 = 350;
  yVoltar = 340; 
  xVoltar = 270; 
  larguraB = 200; 
  larguraVoltar = 100;
  alturaVoltar = 40;
  alturaB = 60; 
  suavizaB = 12; 
}

function telaMenu() {
  //background(220);
  image(imgFundo,0,0)
  textFont(fonteGeral);

  textSize(40);
  fill("#FFDFC9");
  strokeWeight(5); 
  text("Juego", 140, 40);
  text("Del Memoria", 60, 90); 
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

function telaDoJogo(){
  background(0);
  

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
  } 
}

function keyPressed() {
  if (tela === 1 || tela === 2  ) {
    if ( keyCode === ESCAPE ){
      tela = 0
    }
  }

}