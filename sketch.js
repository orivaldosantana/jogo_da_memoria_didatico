
var xb; 
var yb1; 
var yb2; 
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
  larguraB = 200; 
  alturaB = 60; 
  suavizaB = 12; 
}

function draw() {

  if ( tela == 0 ) { 
    //background(220);
    image(imgFundo,0,0)
    textFont(fonteGeral);
    textSize(28);
    
    fill(100)  
    if ( mouseY > yb1 && mouseY < yb1 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
      fill(203,100,104)
    }
    rect(xb,yb1,larguraB,alturaB,suavizaB); 
  
    fill(100)  
    if ( mouseY > yb2 && mouseY < yb2 + alturaB && mouseX > xb && mouseX < xb+larguraB ){
      fill(150,200,150)
    }
    rect(xb,yb2,larguraB,alturaB,suavizaB); 

    // Textos da tela 
    fill("#FF8303")
    stroke(30)
    strokeWeight(3) 
    text("Instruções", xb+15,yb2+40);
    text("Créditos",xb+35,yb1+40);
    fill(255)
  }  
  if ( tela == 1 ){
    background(0);
    fill(255);
    textSize(32);
    text("Tela Créditos", 50, 50 );
  }
  if ( tela == 2){
    background(0);
    fill(255);
    textSize(32);
    text("Tela Instruções", 50, 50 );
  }

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
    }
  } 
}