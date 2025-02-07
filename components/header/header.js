function header(){
    let header = document.createElement('header');
    header.className="div-header";
    
    let img = document.createElement("img");
    img.src = "https://media.istockphoto.com/id/1404166685/es/vector/elemento-de-casino-jugando-cartas-sobre-fondo-blanco-vector.jpg?s=612x612&w=0&k=20&c=hC1MljkzuZMAz550mm7AuTX8F3rM8HRMmoG52yrN5wo=";
    img.className = "div-cartita";
    header.appendChild(img);

    let h1 = document.createElement('h1');
    h1.textContent = "JUEGO DE MEMORIA";
    h1.className = "div-h1";
    header.appendChild(h1);
    
    let niveles = document.createElement('div');
    niveles.className = "div-niveles";
    header.appendChild(niveles);

    let nivel1 = document.createElement('div');
    nivel1.className = "niveles";
    nivel1.textContent = "1";
    niveles.appendChild(nivel1);

    let nivel2 = document.createElement('div');
    nivel2.className = "niveles";
    nivel2.textContent = "2";
    niveles.appendChild(nivel2);

    let nivel3 = document.createElement('div');
    nivel3.className = "niveles";
    nivel3.textContent = "3";
    niveles.appendChild(nivel3);

    let nivel4 = document.createElement('div');
    nivel4.className = "niveles";
    nivel4.textContent = "4";
    niveles.appendChild(nivel4);

    let nivel5 = document.createElement('div');
    nivel5.className = "niveles";
    nivel5.textContent = "5";
    niveles.appendChild(nivel5)

    

    

    return header;
}
export{header}