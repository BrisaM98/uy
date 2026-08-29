const contenedor = document.getElementById('juego-container');
const btnOrder = document.getElementById('btn-order');
const btnBrisa = document.getElementById('btn-brisa');

window.onload = function() {
    btnOrder.style.display = 'none';

    setTimeout(() => {
        document.getElementById('modal-inicio').style.display = 'block';
    }, 1200);
};

function cerrarModalInicio() {
    document.getElementById('modal-inicio').style.display = 'none';
    btnOrder.style.display = 'block'; 
}

function irPantalla2() {
    contenedor.style.backgroundImage = "url('img/PantallaEquipo2.jpg')";
    btnOrder.style.display = 'none';
    btnBrisa.style.display = 'block';
}

function mostrarPregunta() {
    document.getElementById('modal-pregunta-1').style.display = 'block';
}

function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}

function abrirSegundaPregunta() {
    cerrarModal('modal-pregunta-1');
    document.getElementById('modal-pregunta-2').style.display = 'block';
}

function pantallaFin() {
    cerrarModal('modal-pregunta-2');
    const gameOver = document.getElementById('pantalla-game-over');
    gameOver.style.display = 'flex'; 

    setTimeout(() => {
        location.reload();
    }, 3000);
}

function finalizarMagia() {
    cerrarModal('modal-pregunta-2');
    contenedor.style.backgroundImage = "url('img/PantallaEquipoFinal.jpg')";
    btnBrisa.style.display = 'none';
    
    setTimeout(() => {
        document.getElementById('modal-exito').style.display = 'block';
    }, 1000);
}