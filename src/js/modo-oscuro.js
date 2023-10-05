localStorage.setItem('modo-oscuro', false);

const btnSwitch = document.querySelector('#switch');

const fondo = document.querySelector('body');


const tituloResinaVSfilamento = document.querySelector('.titulo-diferencia');

const fondoCarrusel = document.querySelector('#carrusel');
const tituloCarrusel = document.querySelector('.section-titulo');
const subtituloCarrusel = document.querySelector('.section-subtitulo');

btnSwitch.addEventListener("click", function() {
    btnSwitch.classList.toggle('boton-activo');

    tituloResinaVSfilamento.classList.toggle('dark-mode-letras');

    fondoCarrusel.classList.toggle('dark-mode-fondo-carrusel');
    tituloCarrusel.classList.toggle('letras-carrusel-titulo');
    subtituloCarrusel.classList.toggle('letras-carrusel-subtitulo');

    fondo.classList.toggle('dark-mode-fondo');

    let modoOscuroPrincipal = localStorage.getItem('modo-oscuro');
    if (modoOscuroPrincipal == 'true'){
        localStorage.setItem('modo-oscuro', 'false');
    }else{
        localStorage.setItem('modo-oscuro', 'true');
    }

});
