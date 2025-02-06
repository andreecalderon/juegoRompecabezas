import { cargar_cartas } from "./components/tablero/tablero.js";
let DOM = document.querySelector("#root");

cargar_cartas()

let contenedor = document.createElement('div');
contenedor.className = "contenedor"

DOM.appendChild(contenedor);

let header = document.createElement('div');
header.className = "div-header";
contenedor.appendChild(header);

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
