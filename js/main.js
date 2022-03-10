let menu = '';
const carrito = [];
const productos = [
    { nombre: 'Pantalon Nike', precio: 5000 },
    { nombre: 'Remera Jordan', precio: 6500 },
    { nombre: 'Remera Reebok', precio: 4000 },
    { nombre: 'Pantalon Adidas', precio: 14000 },
    { nombre: 'Musculosa Nike', precio: 3600 },
    { nombre: 'Buzo Puma', precio: 8000 },
]

const listarProductos = (items) => {
        let lista = '';
        items.forEach((producto, indice) => {
            lista = lista + `${indice + 1} - ${producto.nombre}: $${producto.precio} \n`;
        });
        return lista;
}
const inicio = () => {
    menu = prompt(`
    1 - Listar productos
    2 - Agregar a carrito
    3 - Listar carrito
    4 - Eliminar del carrito
    5 - Comprar
    6 - Salir
    `);
    
    switch(menu){
        case '1':{
            alert(listarProductos(productos));
            inicio();
            break;
        }
        case '2':{
            const seleccion = prompt(`Seleccionar producto:\n${listarProductos(productos)}`);
            const producto = productos.find((producto, indice) => {
                return indice === (parseInt(seleccion) - 1);
            })
            if(producto) {
                carrito.push(producto);
            } else {
                alert('El producto no existe')
            }
            inicio();
            break;
        }
        case '3':{
            if(carrito.length > 0){
                alert(listarProductos(carrito));
            } else {
                alert('El carrito esta vacio');
            }
            inicio();
            break;
        }
        case '4':{
            const eliminar = prompt(`Eliminar producto:\n${listarProductos(carrito)}`);
            const eliminado = carrito.splice(parseInt(eliminar) - 1, 1);
            if(eliminado.length > 0) {
                alert(`Se elimino ${eliminado[0].nombre}`);
            } else {
                alert('El producto no existe');
            }
            inicio();
            break;
        }
        case '5':{
            const suma = carrito.reduce((acum, producto) => {
                return acum + producto.precio;
            }, 0);
            alert(`El total de tu carrito es de: ${suma}`);
        }

        case '6':
        case null: break;

        default:{
            alert('El menu no existe, vuelva a ingresar');
            inicio();
            break;
        }
    }
};

inicio();

