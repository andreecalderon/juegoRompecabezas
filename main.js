import { header } from "./components/header/header.js";
import { cargar_cartas } from "./components/tablero/tablero.js";
let DOM = document.querySelector("#root");

cargar_cartas()

let contenedor = document.createElement('div');
contenedor.className = "contenedor"

DOM.appendChild(contenedor);

let headerElement = header();
contenedor.appendChild(headerElement);

let progreso = document.createElement('div');
progreso.className = "div-progreso";
contenedor.appendChild(progreso);

let tablero = document.createElement('div');
tablero.className = "div-tablero"
contenedor.appendChild(tablero);
tablero.appendChild(cargar_cartas())


let footer = document.createElement('div');
footer.className = "div-footer"
contenedor.appendChild(footer);

let todasLasCartasDelDOM = document.querySelectorAll('.carta');
todasLasCartasDelDOM.forEach(cadaCarta => {

    cadaCarta.addEventListener("click", ()=>{
        cadaCarta.classList.add("marcado");
    })
})
