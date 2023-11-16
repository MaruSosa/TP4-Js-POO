/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    get cod() {
        return this.codigo;
    }

    get nomb() {
        return this.nombre;
    }

    get prec() {
        return this.precio;
    }

    imprimeDatos() {
        document.write(`<ul>`)
        document.write(`<br> <li>Nombre: ${this.nombre} </li><br><li>Código: ${this.codigo} </li><br><li> Precio: $ ${this.precio}</li><br>`);
        document.write(`</ul>`)
    }
}

const producto1 = new Producto(1234, "Monopoly", 21500);
const producto2 = new Producto(2358, "Teg", 14200);
const producto3 = new Producto(6415, "Ajedrez", 14990);
const productos = [producto1, producto2, producto3];

function mostrarProductos() {
    document.write(`<h2>Los productos son: </h2>`);
    for (let i = 0; i < productos.length; i++) {
        productos[i].imprimeDatos();
    }
}

mostrarProductos();