function Producto(nombre, stock, precio) {
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
}

const productoA = new Producto("barra", 20, 100)
const productoB = new Producto("tabla", 10, 50)

const listaProductos = [productoA, productoB]


let carrito = parseInt(prompt("Ingrese la cantidad de items que desea comprar: "))
    while ((isNaN(carrito)) || carrito < 1) {
        carrito = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
}
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function carritoCompra(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("el precio es de: $" + precioTotal)
    }
    else{
        alert("no tenemos la cantidad deseada, la cantidad disponible es de " + producto.stock)
    }
}

let nombreProducto = []

function nombrarProductos() {
    for(const producto of listaProductos){
        nombreProducto.push(producto.nombre)
    }
}

nombrarProductos()

for(let i = 0; i < carrito; i ++){


    let compra = prompt("Ingrese el producto de lo que desea comprar: \n " + nombreProducto.join ("\n ")).toLowerCase()
        while ((compra != productoA.nombre) && (compra != productoB.nombre))  {
        compra = prompt("Sus unicas opciones de ingreso son: \n"  + nombreProducto.join ("\n ")).toLowerCase()
        }
    
    let cantidad = parseInt(prompt("ingrese la cantidad que desea comprar"))
        while ((isNaN(cantidad)) || cantidad < 1) {
        cantidad = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
        }
    
    if (compra == productoA.nombre){
        carritoCompra(cantidad, productoA)
    }
    else if (compra == productoB.nombre) {
        carritoCompra(cantidad, productoB)
    }
    else{
        alert("no tenemos ese producto")
    }
}
alert("Este es precio total de su compra $ " + precioTotal)