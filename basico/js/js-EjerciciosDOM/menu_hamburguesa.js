/* Hecho por mí 😭😭😭
const $menu = document.querySelector(".hamburger"),   
    $secciones = ["section 1", "section 2", "section 3", "section 4", "section 5"];

const desplegarMenu = () => {
    const $section = document.createElement("section");
    if(!($menu.classList.contatins("is-active"))){
        $menu.classList.add("is-acive");
        document.body.appendChild($section);

        $secciones.forEach(el => {
            const $titulo = document.createElement("h2");
            $titulo.textContent = el;    
            $section.appendChild($titulo);
        })
    }else{
        $menu.classList.remove("is-active");
        document.body.removeChild($section);
        $section.outerHTML = ` `;
    }
}

$menu.addEventListener("click", desplegarMenu)
*/

export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}




