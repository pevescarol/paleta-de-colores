document.getElementById('color').addEventListener('input', getColor)

function getColor(){
    let col = document.getElementById('color').value

    /* utilice ese color para el cuadro */
    document.getElementById('visualizar').style.background=col
    /* que me muestre el color en hexadecimal */
    document.getElementById('visualizar').innerHTML=col
}