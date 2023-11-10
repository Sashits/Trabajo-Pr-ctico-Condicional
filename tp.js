let botonRojo = document.querySelector('#botonRojo')
let botonAzul = document.querySelector('#botonAzul')
let botonVerde = document.querySelector('#botonVerde ')

botonRojo.onclick = function() {
    titulo.style.color = 'red'
} 

botonAzul.onclick = function() {
    titulo.style.color = 'blue'
} 


let tamaño = document.querySelector('img  ')

let aumento = 100
tamaño.onclick = function(){
    aumento = aumento + 10
    imagen1.style.width = aumento + 'px'
}