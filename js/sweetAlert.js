btnCarrito.onclick = () => {
    Swal.fire ({
        width:900,
        title: 'CARRITO',
        html: 
        '<div class="carrito" id="carrito"></div>' +
        '<table class="table table-hover text-center container-principal"><thead><tr><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th><tbody id="tbody"></tbody></tr></thead></table>'
        
    })
    rellenarCarrito(carrito);
}

