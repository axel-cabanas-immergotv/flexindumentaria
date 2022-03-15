//Elemento agregado
const heroContenedor = document.getElementById('hero-contenedor')
heroContenedor.innerHTML += `<img class= "new-img" src="https://i.pinimg.com/originals/d4/53/df/d453df812712cc898a9ddd6a6ce341fa.jpg">
<p class= "color-blanco">IMAGEN AGREGADA DESDE JS!</p>`

//Elemento modificado
let heroParrafo = document.getElementById('parrafo1');
heroParrafo.innerText += ` 
¡COMPRA YA!`;

//Entrada del usuario mediante el prompt y mostrado en el HTML
const mensaje = prompt('Escribe el texto que quieras y aparecerá debajo de los osos escandalosos :)');

if(mensaje != ''){
    heroContenedor.innerHTML += ` 
    <h1 class= "color-blanco">${mensaje}</h1>`; 
}