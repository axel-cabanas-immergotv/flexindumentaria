let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const contenedorTienda = document.getElementById('tienda');
const contenedorCarrito = document.getElementById('carrito');
const rellenarCarrito = (arrayCarrito) => {
    const tbody = document.querySelector('#tbody');
    const tFooter = document.createElement('tr');
    const total = carrito.reduce((acum, item) => {
        return acum + item.subtotal;
    }, 0)

    tbody.innerHTML = "";

    for(const producto of arrayCarrito){
        const row = document.createElement('tr');
        
        
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.subtotal}</td>
            <td>
                <button class="btn btn-danger eliminarProducto" id="${producto.id}">X</button>
            </td>
        `;
        tbody.appendChild(row);
    }
    
    tFooter.innerHTML = `
        <td><strong>TOTAL</strong></td>
        <td colspan="2"></td>
        <td><strong>$${total}</strong></td>
        <td></td>
    `;
    tbody.appendChild(tFooter);

    botonesEliminarListener();
}
const botonesEliminarListener = () => {
    const botonesEliminar = document.querySelectorAll('.eliminarProducto');

    botonesEliminar.forEach(elemento => {
        elemento.onclick = (e) => {
            
            const indice = carrito.findIndex(producto => producto.id == e.target.id)
            carrito.splice(indice, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
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
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    link.append(imgProducto, nombreProducto, precioProducto);
    divProducto.append(link)
    contenedorProducto.append(divProducto);
    contenedorTienda.append(contenedorProducto);
}

rellenarCarrito(carrito);
