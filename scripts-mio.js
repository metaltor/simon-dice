
let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda=0;
document.querySelector("button[type=button]").onclick = comenzarJuego

function comenzarJuego (){
   // resaltar()
    obtenerCuadroAleatorio()
    
}

function manejarRonda (){
secuenciaUsuario.forEach($cuadro)
}

function resaltar($cuadro){
    $cuadro.style.opacity =1
    setTimeout(function(){
        $cuadro.style.opacity = 0.5 
    }, 500);
    
};

function obtenerCuadroAleatorio() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const Indice= Math.floor(Math.random() * ($cuadros.length));
   
   return console.log($cuadros[indice]);
  };
function reiniciarPartida(){
    secuenciaMaquina=[];
    secuenciaUsuario=[];
    ronda=0
};