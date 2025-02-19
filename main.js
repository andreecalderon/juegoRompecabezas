import { header } from "./components/header/header.js";
import { progreso } from "./components/progreso/progreso.js";
import { cargar_cartas } from "./components/tablero/tablero.js";

function cargarDOM() {
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let headerElement = header();
    contenedor.appendChild(headerElement);

    let progreso = document.createElement('div');
    progreso.className = "div-progreso";
    contenedor.appendChild(progreso);

    let tablero = document.createElement('div');
    tablero.className = "div-tablero";
    contenedor.appendChild(tablero);
    tablero.appendChild(cargar_cartas());

    let footer = document.createElement('div');
    footer.className = "div-footer";
    contenedor.appendChild(footer);

    let todasLasCartasDelDOM = contenedor.querySelectorAll('.carta');
    todasLasCartasDelDOM.forEach(cadaCarta => {
        cadaCarta.addEventListener("click", () => {
            cadaCarta.classList.add("marcado");
        });
    });

    return contenedor;
}

let DOM = document.querySelector("#root");
DOM.appendChild(cargarDOM());

