// itemCarta.js
import { manejarVolteo } from "./mesclarCartas.js";

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

export { item };