import { barajeo } from "./data.js";

function item(contenido) {
    let div = document.createElement("div");
    div.textContent = contenido;
    div.className = "carta";
    return div;
}


function cargar_cartas() {
   
    let todas_las_cartas = barajeo();

    
    let div = document.createElement("div");
    div.className = "divtablero";

 
    todas_las_cartas.forEach(contenido => {
        div.appendChild(item(contenido));
    });

    return div;
}

export { cargar_cartas };