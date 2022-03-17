const carrito = [];
const productos = [
    { id: '1', nombre: 'Pantalon Nike', precio: 5000, cantidad: 1 , img: '../assets/galeria4.jpg' },
    { id: '2', nombre: 'Remera Jordan', precio: 6500, cantidad: 1 , img: '../assets/galeria2.jpg' },
    { id: '3', nombre: 'Remera Reebok', precio: 4000, cantidad: 1 , img: '../assets/galeria10.jpg' },
    { id: '4', nombre: 'Pantalon Adidas', precio: 14000, cantidad: 1 , img: '../assets/galeria5.jpg' },
    { id: '5', nombre: 'Musculosa Nike', precio: 3600, cantidad: 1 , img: '../assets/galeria6.jpg' },
    { id: '6', nombre: 'Buzo Puma', precio: 8000, cantidad: 1 , img: '../assets/galeria7.jpg' },
]
const contenedorTienda = document.getElementById('tienda');
const contenedorCarrito = document.getElementById('carrito');
const rellenarCarrito = (arrayCarrito) => {
    const tbody = document.querySelector('#tbody');

    tbody.innerHTML = "";

    for(const producto of arrayCarrito){
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.subtotal}</td>
            <td>
                <button class="btn btn-danger eliminarProducto" id="${producto.id}">X</button>
            </td>
        `;
        tbody.appendChild(row);
    }
    botonesEliminarListener();
}
const botonesEliminarListener = () => {
    const botonesEliminar = document.querySelectorAll('.eliminarProducto');

    botonesEliminar.forEach(elemento => {
        elemento.onclick = (e) => {
            
            const indice = carrito.findIndex(producto => producto.id == e.target.id)
            carrito.splice(indice, 1);
            rellenarCarrito(carrito);
        }
    })
}

for(const producto of productos){
    const contenedorProducto = document.createElement('div');
    const divProducto = document.createElement('div');
    const link = document.createElement('a');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('p');
    const precioProducto = document.createElement('p');
    // const botonComprar = document.createElement('button');

    contenedorProducto.className = 'hero__fullImg col-lg-4 col-sm-6';
    divProducto.className = 'hero__img-compra';
    link.className = 'precio__text';
    imgProducto.className = 'hero__img img-fluid';
    nombreProducto.className = 'compra__parrafo';
    precioProducto.className = 'compra__precio';
    // botonComprar.className = 'btn btn-primary';

    imgProducto.src = producto.img;
    nombreProducto.append(producto.nombre);
    precioProducto.append(`$${producto.precio}`);
    // botonComprar.append('Comprar');
    link.id = `${producto.id}`;

    link.onclick = (e) => {
        const productoComprado = productos.find(producto => producto.id === link.id);
        const indice = carrito.findIndex(producto => producto.id == e.currentTarget.id);
        
                
        if(indice === -1){
            carrito.push({ nombre: productoComprado.nombre, precio: productoComprado.precio, cantidad: productoComprado.cantidad, subtotal: productoComprado.precio , id: productoComprado.id });
        } else {
            carrito[indice].cantidad++;
            carrito[indice].subtotal = carrito[indice].precio * carrito[indice].cantidad;
        }

        rellenarCarrito(carrito);
    }

    link.append(imgProducto, nombreProducto, precioProducto);
    divProducto.append(link)
    contenedorProducto.append(divProducto);
    contenedorTienda.append(contenedorProducto);
}


