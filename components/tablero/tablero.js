import { barajeo } from "./data.js";
import { item } from "./itemCarta.js";
import { manejarVolteo } from "./mesclarCartas.js";

function cargar_cartas() {  
    let todas_las_cartas = barajeo();
    let div = document.createElement("div");
    div.className = "divtablero";
    
    todas_las_cartas.forEach(contenido => {
        const cartaElemento = item(contenido);
        div.appendChild(cartaElemento);
    });

    return div;
}

export { cargar_cartas };