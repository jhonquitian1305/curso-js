import hamburgerMenu from "./js-EjerciciosDOM/menu_hamburguesa.js";
import { digitalClock, alarm } from "./js-EjerciciosDOM/reloj.js";
import { moveBall, shortcuts } from "./js-EjerciciosDOM/teclado.js";
import countdown from "./js-EjerciciosDOM/cuenta_regresiva.js";
import scrollTopButton from "./js-EjerciciosDOM/boton_scroll.js";
import darkTheme from "./js-EjerciciosDOM/tema_oscuro.js";
import responsiveMedia from "./js-EjerciciosDOM/objeto_responsive.js";
import responsiveTester from "./js-EjerciciosDOM/prueba_responsive.js";
import userDeviceInfo from "./js-EjerciciosDOM/deteccion_dispositivos.js";
import networkStatus from "./js-EjerciciosDOM/deteccion_red.js";
import webCam from "./js-EjerciciosDOM/deteccion_webcam.js";
import getGeolocation from "./js-EjerciciosDOM/geolocalizacion.js";
import searchFilters from "./js-EjerciciosDOM/filtro_busquedas.js";
import draw from "./js-EjerciciosDOM/sorteo.js";
import slider from "./js-EjerciciosDOM/carrusel.js";
import scrollSpy from "./js-EjerciciosDOM/scroll_espia.js";
import smartVideo from "./js-EjerciciosDOM/video_inteligente.js";
import contactFormValidations from "./js-EjerciciosDOM/validaciones_formulario.js";
import speechReader from "./js-EjerciciosDOM/narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm('/assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
    countdown(
        'countdown',
        'Jul 29, 2022 13:49:00',
        'Feliz Cumpleaños amigo y docente digital'
    );
    scrollTopButton('.scroll-top-btn');
    responsiveMedia(
        'youtube',
        '(min-width: 1024px)',
        `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank rel="noopener">Ver Vídeo</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        'gmaps',
        '(min-width: 1024px)',
        '<a href="https://goo.gl/maps/n5WwXZf5kHgwvFAf9" target="_blank rel="noopener">Ver Mapa</a>',
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1034488112027!2d-75.56825648588419!3d6.2500977280167875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f8f2445779%3A0xf6880fca3fd3b4a6!2sEdificio%20Coltejer!5e0!3m2!1ses-419!2sco!4v1637535693124!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester('responsive-tester');
    userDeviceInfo('user-device');
    webCam('webcam');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();    
})

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
})
darkTheme('.dark-theme-btn', "dark-mode");
networkStatus();
speechReader();

