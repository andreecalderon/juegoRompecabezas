function barajeo(carta_par1 = ["🍇", "🥥", "🍉", "🍑", "🥝", "🍓", "🍔", "🍍"], 
    carta_par2 = ["🍇", "🥥", "🍉", "🍑", "🥝", "🍓", "🍔", "🍍"]) {
    
    let todas_las_cartas = carta_par1.concat(carta_par2);

    todas_las_cartas.sort(() => Math.random() - 0.5);

    return todas_las_cartas;
}
let todas_las_cartas = barajeo();

export { barajeo};