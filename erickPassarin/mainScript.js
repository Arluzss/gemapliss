//teclado/player
var rect1 = {x: 800, y: 850, width: 180, height: 60}
var rect2 = {x: 800, y: -400, width: 60, height: 60}
var pixels = "px"



window.addEventListener("keydown", movimento);
//teclado
function movimento() {
    var pou = document.getElementById("pou")
    var jogador = window.document.getElementById("equi");
    
    var key = event.keyCode;
    
    if(key == 37){//esquerda
        rect1.x += -30  
        jogador.style.left = rect1.x + pixels
       console.log(rect1.x)
    }  
    else if (key == 39){//direita
        rect1.x += 30
        jogador.style.left = rect1.x + pixels
    }
    else if(key == 13){
        jogador.style.left = rect1.x + pixels
        pou.play()
        teste()
    }
   
}
function teste(){
    var TeVi = document.getElementById("BemTeVi")
    var teste = window.document.getElementById("passarin");
    teste.style.left = rect2.x + pixels
    rect2.y += 40;
    teste.style.top = rect2.y + pixels;

    testi();
    console.log(teste.style.top);
     //colisão/futuroPassarin
     if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        rect2.y = -400
        TeVi.play()
     }
    if(rect2.y > 1000){
        rect2.y = -400
    }
}
function testi(){
    setTimeout(teste,100);
}





