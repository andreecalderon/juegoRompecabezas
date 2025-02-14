import { barajeo } from "./data.js";

let cartasVolteadas = [];
let parejasEncontradas = 0;

function item(contenido) {
    let div = document.createElement("div");
    div.className = "carta";
    div.dataset.valor = contenido;

    let frente = document.createElement("div");
    frente.className = "frente";
    frente.textContent = contenido;

    let dorso = document.createElement("div");
    dorso.className = "dorso";
    dorso.textContent = "?";

    div.appendChild(frente);
    div.appendChild(dorso);
    div.addEventListener("click", () => manejarVolteo(div));

    return div;
}

function manejarVolteo(carta) {
    if (cartasVolteadas.length < 2 && !carta.classList.contains("volteada")) {
        carta.classList.add("volteada");
        cartasVolteadas.push(carta);

        if (cartasVolteadas.length === 2) {
            setTimeout(verificarPareja, 1000);
        }
    }
}

function verificarPareja() {
    let [carta1, carta2] = cartasVolteadas;

    if (carta1.dataset.valor === carta2.dataset.valor) {
        parejasEncontradas++;
    } else {
        carta1.classList.remove("volteada");
        carta2.classList.remove("volteada");
    }

    cartasVolteadas = [];
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