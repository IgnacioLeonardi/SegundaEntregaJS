//Class constructora de productos nuevos
class Producto {
    constructor(id, nombreProducto, categoriaProducto, precioProducto) {
        this.id = id,
        this.nombre = nombreProducto,
        this.categoria = categoriaProducto,
        this.precio = precioProducto
    }
}
//Array de productos, carga de productos iniciales y subida al array.
const productos = []
const prod1 = new Producto(1, "Coca-Cola", "Bebidas", 620)
const prod2 = new Producto(2, "Galletitas", "Comestibles", 450)
const prod3 = new Producto(3, "Jugo", "Bebidas", 300)
const prod4 = new Producto(4, "Papel Higienico", "Limpieza", 1200)
const prod5 = new Producto(5, "Fernet", "Bebidas", 2000)
const prod6 = new Producto(6, "Carbón", "Asado", 730)
const prod7 = new Producto(7, "Cerveza", "Bebidas", 700)
const prod8 = new Producto(8, "Mayonesa", "Comestibles", 900)
const prod9 = new Producto(9, "Azucar", "Comestibles", 500)
const prod10 = new Producto(10, "Desodorante", "Higiene", 650)
productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10)

//Funcion para agregar productos nuevos
function agregarProducto() {
    let productoNuevo = prompt("Ingrese el nombre del producto: ")
    let categoriaProducto = prompt(`Ingrese a que categoria pertenece el producto: `)
    let precioProducto = parseInt(prompt("Ingrese el precio del producto: "))
    let datosProducto = new Producto(productos.length + 1, productoNuevo, categoriaProducto, precioProducto)
    productos.push(datosProducto)
}

// Funcion para mostrar productos en consola
function mostrarProductos(array) {
    console.log(`Listado de productos en stock: `)
    for (let productos of array) {
        console.log(`Id: ${productos.id}, Producto: ${productos.nombre}, Categoria: ${productos.categoria}, Precio: $${productos.precio}`)
    }
}
// Funcion de busqueda por nombre o categoria con total o parcialmente
function busquedaNombreCategoria(array) {
    let datoBusqueda = prompt("Ingrese el nombre del producto o categoria que desea buscar: ")
    const busqueda = array.filter(
        (dato) => dato.nombre.toUpperCase().includes(datoBusqueda.toUpperCase()) || dato.categoria.toUpperCase().includes(datoBusqueda.toUpperCase())
    )
    if (busqueda.length == 0) {
        console.log(`El dato ${datoBusqueda} no está en nuestro stock como nombre de producto o categoria`)
    } else {
        mostrarProductos(busqueda)
    }
}

//Filtro por precio maximo y minimo
function filtrarPorPrecio(array) {
    let opcion = parseInt(prompt(`
    1 - Filtrar por precio minimo
    2 - Filtrar por precio máximo`))
    switch (opcion) {
        case 1:
            let precioMinimo = parseInt(prompt("Ingrese el precio minimo para mostrar productos"))
            let busquedaMinimo = array.filter(
                (producto) => { return producto.precio >= precioMinimo }
            )
            mostrarProductos(busquedaMinimo)
            break
        case 2:
            let precioMaximo = parseInt(prompt("Ingrese el precio máximo para mostrar productos"))
            let busquedaMaximo = array.filter(
                (producto) => { return producto.precio <= precioMaximo }
            )
            mostrarProductos(busquedaMaximo)
            break
        default:
            console.log(`La opción ${opcion} no es válida`)
            break
    }
}

// Funcion para eliminar productos
function borrarProducto(array) {
    mostrarProductos(array)
    let borrar = parseInt(prompt("Ingrese el id que desea eliminar"))
    let arrayID = array.map(libro => libro.id)
    let indice = arrayID.indexOf(borrar)
    array.splice(indice, 1)
    mostrarProductos(array)

}

//Funcion para ordenar de todas las maneras
function ordenar(array) {
    let opcion = parseInt(prompt(`
          1 - Ordenar de menor a mayor
          2 - Ordenar de mayor a menor
          3 - Ordenar alfabeticamente por nombre de producto
          4 - Ordenar alfabeticamente por categoria`))
    switch (opcion) {
        case 1:
            const menorMayor = [].concat(array)
            console.log(menorMayor)
            menorMayor.sort((a, b) => a.precio - b.precio)
            mostrarProductos(menorMayor)
            break
        case 2:
            const mayorMenor = [].concat(array)
            mayorMenor.sort((elem1, elem2) => elem2.precio - elem1.precio)
            mostrarProductos(mayorMenor)
            break
        case 3:
            const alfabeticoNombre = [].concat(array)
            alfabeticoNombre.sort((a, b) => {
                if (a.nombre > b.nombre) {
                    return 1
                }
                if (a.nombre < b.nombre) {
                    return -1
                }
                return 0
            })

            mostrarProductos(alfabeticoNombre)
            break
        case 4:
            const alfabeticoCategoria = [].concat(array)
            alfabeticoCategoria.sort((a, b) => {
                if (a.categoria > b.categoria) {
                    return 1
                }
                if (a.categoria < b.categoria) {
                    return -1
                }
                return 0
            })

            mostrarProductos(alfabeticoCategoria)
            break
        default:
            console.log(`La opción ${opcion} no es válida`)
            break

    }
}

let salirMenu = false

do {
    let opcion = parseInt(prompt(`Ingrese la opción deseada
       1 - Agregar Producto
       2 - Borrar Producto
       3 - Mostrar Productos
       4 - Buscar Por Nombre De Producto o Categoria
       5 - Filtrar Por Precio
       6 - Ordenar Productos:
       0 - Salir del menu`))
    switch (opcion) {
        case 1:
            agregarProducto()
            break
        case 2:
            borrarProducto(productos)
            break
        case 3:
            mostrarProductos(productos)
            break
        case 4:
            busquedaNombreCategoria(productos)
            break
        case 5:
            filtrarPorPrecio(productos)
            break
        case 6:
            ordenar(productos)
            break
        case 0:
            console.log(`Gracias Por Utilizar Nuestra Aplicación!`)
            salirMenu = true
            break
        default:
            console.log("Opción no válida, ingrese alguna presente en el menu.")
            break
    }
} while (!salirMenu)