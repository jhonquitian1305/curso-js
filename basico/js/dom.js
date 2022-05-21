/*console.log(window);
console.log(document);

let texto = "Hola soy tu amigo y docente Jonathan MirCha"
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);*/



console.log("******** Elementos del Documento *********");
//DOM introducción
/*console.log(window.document);
console.log(document);
console.log(document.head.innerHTML);
console.log(document.body.innerHTML);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000)
document.write("<h2>Hola Mundo desde el DOM");*/

//Nodos, Elementos y Selectores
/*console.log(document.getElementsByTagName("li")); //Ha sido reemplazado querySelector
console.log(document.getElementsByClassName("card")); //Ha sido reemplazado querySelector
console.log(document.getElementsByName("nombre")); //Ha sido reemplazado querySelector

console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/

//Atributos
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id"));*/

//Estilos y variables CSS
/*const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000"); //En este punto no cambia en la vista
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color" , varDarkColor);
*/


//DOM: Clases CSS

/*const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); //Quita si la tiene o agrega si no la tiene
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
*/



//DOM: Texto y HTML
/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// $whatIsDOM.innerText = text; //No forma parte del estándar
$whatIsDOM.textContent = text; //Para ingresar solo texto
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; //Reemplaza lo que está seleccionado por lo que se le asigna
*/


//DOM Traversing: Recorriendo el DOM
/*const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/

//DOM: Creando Elementos y Fragmentos
/*
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figCaption = document.createElement("figcaption"),
    $figCaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");



$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figCaption.appendChild($figCaptionText);
$figure.appendChild($img);
$figure.appendChild($figCaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);




const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(el => ($ul2.innerHTML += `<li>${el}</li>`))

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/

//DOM: Templates HTML
/*
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img:"https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img:"https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img); 
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

$cards.appendChild($fragment);
*/



//DOM: Modificando Elementos (Old Style)
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
    $cloneCard = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);
// $cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);
document.body.appendChild($cloneCard);
*/



//DOM: Modificando Elementos (Cool Style)
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);
*/



//DOM: Manejadores de Eventos(EventHandler)
/*
function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
    alert("Hola Mundo, Manejador de eventos semántico");
    console.log(e);
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo, Manejador de Eventos Múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});
*/



//DOM: Eventos con Parámetros y Remover Eventos
/*
const $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

function holaMundo(e){
    alert("Hola Mundo");
    console.log(e);
}


function saludar(nombre = "Desconocida/o"){
    alert(`Hola, ${nombre}`);
    console.log(event);
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo, Manejador de Eventos Múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Jhon");
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);
*/


//DOM: Flujo de Eventos (Burbuja y Captura)
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos (e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

console.log($divsEventos);

$divsEventos.forEach(div => {
    //Fase de burbuja 
    div.addEventListener("click", flujoEventos);
    // div.addEventListener("click", flujoEventos, false);

    //Fase de captura
    // div.addEventListener("click", flujoEventos, true);
    
    // div.addEventListener("click", flujoEventos, {
    //     capture: false,
    //     once: true
    // });

});
*/


//DOM: stopPropagation y preventDefault
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos (e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach(div => {
    //Fase de burbuja 
    div.addEventListener("click", flujoEventos);

    //Fase de captura
    // div.addEventListener("click", flujoEventos, true);
});

$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital Jonathan MirCha");
    e.preventDefault();
    e.stopPropagation();
})
*/



//DOM: Delegación de Eventos
/*
function flujoEventos (e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);    
}

document.addEventListener("click", (e) => {
    console.log("Click en ", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo y docente digital Jonathan MirCha");
        e.preventDefault();
    }

});
*/



//BOM: Propiedades y Eventos
/*
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("********* Evento Resize *********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("********* Evento Scroll *********"); 
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {
    console.log("********* Evento Load *********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});


//Es mucho más rápido que load
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("********* Evento DOMContentLoaded *********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});
*/


//BOM: Métodos

// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso");
/*
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;
$btnAbrir.addEventListener("click", (e) => {
    ventana = open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
    ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
    print()
});
*/


//BOM: Objetos: URL, Historial y Navegador
/*
// console.log("******** Objeto URL (location) ************");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);
// location.reload();

// console.log("************ Objeto Historial (history) **************");
// console.log(history);
// console.log(history.length);
// history.back() //Ir atrás respecto a la página donde está
// history.forward() //Ir adelante respecto a la página donde está
// history.go() //Si es negativo va hacia atrás el número indicado si es positivo va hacia adelante


// console.log("********* Objeto Navegador (Navigator) *************")
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);

*/





