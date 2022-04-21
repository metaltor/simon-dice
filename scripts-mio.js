
let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda=0;
document.querySelector("button[type=button]").onclick = comenzarJuego

actualizarBarraEstado('Para empezar a jugar presiona el boton "Empezar"')
actualizarNumeroRonda('-')
bloquearClickUsuario()

function comenzarJuego (){ 
    reiniciarPartida()
    actualizarBarraEstado('Turno de la maquina')
    manejarRonda()
}

function reiniciarPartida(){
    secuenciaMaquina=[];
    secuenciaUsuario=[];
    ronda=0
};

function manejarRonda (){
    const $nuevoCuadro = obtenerCuadroAleatorio()
    secuenciaMaquina.push($nuevoCuadro)

secuenciaMaquina.forEach(function($cuadro,index){
    const RETRASO_SM = (index + 1)*1000
    setTimeout(function(){
        resaltar($cuadro);
    },RETRASO_SM);
    
});
    const RETRASO_JUGADOR = (secuenciaMaquina.length+1) *1000
    setTimeout(function(){
        actualizarBarraEstado('Turno del Jugador');
        DesbloquearClickUsuario();
    }, RETRASO_JUGADOR)

    ronda++
    secuenciaUsuario=[]
    actualizarNumeroRonda(ronda)
};

function manejarInputUsuario(e){
    const $cuadro = e.target;
    resaltar($cuadro)
    secuenciaUsuario.push($cuadro);
    const $cuadroMaquina = secuenciaMaquina[secuenciaUsuario.length-1]

    if($cuadro.id !== $cuadroMaquina.id){
        perder();
        return; 
    }
    if(secuenciaUsuario.length === secuenciaMaquina.length){
        bloquearClickUsuario()
        setTimeout(manejarRonda,1000)
    }
    
};

function actualizarNumeroRonda(ronda){
    const $ronda = document.querySelector('#ronda');
    $ronda.textContent=ronda;
};

function actualizarBarraEstado(estado, error=false){
    const $estado = document.querySelector('#estado')
    $estado.textContent = estado 

    if (error){
        $estado.className.remove ='alert-primary'
        $estado.className.add='alert-danger'
    }else {
        $estado.className.remove ='alert-danger'
        $estado.className.add='alert-primary'
    }
}
function resaltar($cuadro){
    $cuadro.style.opacity =1
    setTimeout(function(){
        $cuadro.style.opacity = 0.5 
    }, 500);
    
};

function obtenerCuadroAleatorio() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const indice= Math.floor(Math.random() * ($cuadros.length));
   
   return $cuadros[indice];
  };

function DesbloquearClickUsuario(){
    document.querySelectorAll('.cuadro').forEach(function($cuadro){
        $cuadro.onclick = manejarInputUsuario
    });
}

function bloquearClickUsuario(){
    document.querySelectorAll('.cuadro').forEach(function($cuadro){
    })
}
function perder(){
    actualizarBarraEstado('Perdiste!!!!!')
    setTimeout(function(){
        alert('vuelve a intentarlo')
        actualizarBarraEstado('Para empezar a jugar presiona el boton "Empezar"')
        actualizarNumeroRonda('-')
        bloquearClickUsuario()
    },1000)
    
}