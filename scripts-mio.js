
let secuenciaMaquina = [];
let secuenciaUsuario = [];
document.querySelector("button[type=button]").onclick = comenzarJuego

function comenzarJuego (){
   // resaltar()
    //obtenerCuadroAleatorio()
    getRandomArbitrary(2,6)
}

function resaltar($cuadro){
    $cuadro.style.opacity =1
    setTimeout(function(){
        $cuadro.style.opacity = 0.5 
    }, 500);
    
}
function obtenerCuadroAleatorio(min,max){
    const aleatorio = Math.random()

   return console.log(aleatorio)
}

function getRandomArbitrary() {
    const cuadro = document.querySelectorAll('.cuadro')
    const aleatorio= Math.floor(Math.random() * (cuadro.length+1))
   
   return console.log(aleatorio)
  }