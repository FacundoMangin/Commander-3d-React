localStorage.setItem('modo-oscuro', false);


const btnSwitch = document.querySelector('#switch');

const galeria = document.querySelector('.container');
const fondoGaleria = document.querySelector('.escala');

btnSwitch.addEventListener("click", function() {
    btnSwitch.classList.toggle('boton-activo');    

    galeria.classList.toggle('galeria');
    fondoGaleria.classList.toggle('fondo-galeria');

    let modoOscuroPrincipal = localStorage.getItem('modo-oscuro');
    if (modoOscuroPrincipal == 'true'){
        localStorage.setItem('modo-oscuro', 'false');
    }else{
        localStorage.setItem('modo-oscuro', 'true');
    }

});